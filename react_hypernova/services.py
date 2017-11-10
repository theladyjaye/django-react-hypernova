import logging
from django.utils.html import mark_safe
from django.conf import settings
import requests

log = logging.getLogger(__name__)

class ReactHypernova:

    def __init__(self, address: str):
        self.address = address

    def create_component(self, component_name: str, **props):
        return ReactHypernovaComponent(
            self.address, component_name, **props
        )


class ReactHypernovaComponent:

    def __init__(self, address: str, component_name: str, **props):
        self.component_name = component_name
        self.props = props
        self.address = address


    def render(self) -> str:
        component_name = self.component_name

        payload = {
            component_name: {
                "name": component_name,
                "data": self.props
            }
        }

        # It's a good practice to set connect timeouts to slightly
        # larger than a multiple of 3, which is the default TCP
        # packet retransmission window.
        # http://www.pcvr.nl/tcpip/tcp_time.htm
        # http://www.hjp.at/doc/rfc/rfc2988.txt
        timeout = getattr(settings, 'REACT_HYPERNOVA_TIMEOUT', 6.05)

        try:
            res = requests.post(self.address, json=payload, timeout=timeout)
        except requests.exceptions.Timeout as e:
            # Catching this error will catch both
            # requests.exceptions.ConnectTimeout` and
            # requests.exceptions.ReadTimeout` errors.
            log.warn("Request to hypernova server at '%s' timed out", self.address)
            return ""
        except requests.exceptions.RequestException as e:
            log.warn("Request to hypernova server at '%s' failed", self.address)
            return ""

        result = res.json()
        return mark_safe(result['results'][component_name]['html'])

    def __str__(self):
        return self.render()