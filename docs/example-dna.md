# **Example CTX**

---

  ```
	 "dna": {
	     "['package.core.auth'].web.documents.login": {
	         "actions": [
	             {
	                 "type": "GET_DOMAIN",
	                 "payload": {},
	                 "error": false,
	                 "meta": {
	                     "package": "package.core.cms",
	                     "endpoint": "/api/package.core.cms/web"
	                 }
	             }
	         ],
	         "data": {
	             "accessors": {
	                 "domain": "actions.GET_DOMAIN.response"
	             }
	         },
	         "set": {
	             "viewport": "scroll"
	         },
	         "ui": {
	             "theme.variant": "default",
	             "theme.model.variant": "scrollContainer",
	             "theme.design.variant": "login",
	             "theme.skin.variant": "themeVariantDefault",
	             "theme.skin.tone": "dimensionVariantDefault",
	             "theme.skin.typography": "sans",
	             "theme.skin.spacial": "compact",
	             "theme.skin.motion": "smooth",
	             "theme.style.variant": "home",
	             "theme.style.class": "home",
	             "theme.style.css": {
	                 "backgroundColor": "#17141D",
	                 "backgroundImage": "url(/domains/my-react-bio-app.org/package.core.cms/img/bio.jpg)"
	             }
	         }
	     },

        
  
