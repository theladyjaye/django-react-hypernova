import json
from django import template
from django.apps import apps


register = template.Library()


@register.simple_tag
def react_hypernova_component(component_name, **kwargs):
    hypernova = apps \
        .get_app_config('react_hypernova') \
        .get_hypernova()

    component = hypernova.create_component(component_name, **kwargs)
    return component.render()
