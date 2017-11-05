import logging
from django.conf import settings
from django.apps import AppConfig
from .services import ReactHypernova

log = logging.getLogger(__name__)

# Availale Settings + defaults:
# - REACT_HYPERNOVA_ADDRESS: http://localhost:8080/batch
# - REACT_HYPERNOVA_TIMEOUT: 6.05

class Config(AppConfig):
    name = "react_hypernova"
    label = "react_hypernova"
    verbose_name = "React Hypernova"

    def ready(self):
        address = getattr(
            settings, "REACT_HYPERNOVA_ADDRESS",
            default="http://localhost:8080/batch"
        )

        self.react_hypernova = ReactHypernova(
            address=address
        )

    def get_hypernova(self):
        return self.react_hypernova