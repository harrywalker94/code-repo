Mmenu.configs.offCanvas.page.selector = "#my-page";

document.addEventListener(
	 "DOMContentLoaded", () => {
		  const menu = new Mmenu( "#my-menu", {
            "extensions": [
                "fx-menu-slide",
                "fx-panels-slide-100",
                "border-full",
                "pagedim-black",
                "position-front",
                "position-right",
                "shadow-panels"
             ],
             "iconPanels": true,
            "navbars": [
                {
                   "position": "top",
                   "content": [
                      "searchfield"
                   ]
                },
                {
                   "position": "top",
                   "content": [
                      "breadcrumbs",
                      "prev"
                   ]
                },
                {
                    "position": "bottom",
                    "content": [
                       "<a class='fab fa-stack-overflow fa-2x' href='https://stackoverflow.com/'></a>",
                       "<a class='fab fa-umbraco fa-2x' href='https://our.umbraco.com/forum/'></a>"                    ]
                 }
             ]
		  });
		 console.log(menu)


	 }
);