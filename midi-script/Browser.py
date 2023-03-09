from __future__ import absolute_import
from .Interface import Interface



class Browser(Interface):
    @staticmethod
    def serialize_browser(browser):
        if browser is None:
            return None


        return {"Hello":"World!"}

    def __init__(self, c_instance, socket):
        super(Browser, self).__init__(c_instance, socket)

