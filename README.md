# What is Scaffy?
Open sourse framework to kickstart front-end development. It allows you to keep code logical and easily maintainable & extandable by splitting it into modules.

Using Scaffy let's you:
* don't be aware of styles inheritance
* don't have a conflicts between two complitely different elements in different places
* be sure that current element will look identically same everywhere
* clone element to create few styles of it (few buttons sizes and colors) keeping separate structure from skin
* keep source predictable to find by having naming convention
* using SASS in full power by having shared mixins & variables accross the project
* organize endless amount of **Skins** & **Layouts** without code duplicate

# So what's inside?
* framework
  * **base.sass** — linker for all framework stylesheets
  * **config.sass** — all shared variables store here. Also links **mixins** at the end
  * **grids.sass** — rock solid grids that allows you to build any layout no matter how complex is it. Works perfectly in IE6+ and all others
  * **mixins.sass** — all SASS mixins go here. No need to use monster tools with thousands of mixins, just create mixins for your needs and use them accross the project.
  * **reset.sass** — resets everything to zero margin, padding + some black magic hacks to fix browsers inconsistences
  * **spaces.sass** — use to modify the default spacing between objects
  * **type.sass** — stores all typography related style definitions
* layouts
  * **\*.sass** — place for general layout styling. Store **body**, **wrapper**, **content** and other layout specific blocks here.
    Add a link to a **config.sass** to use shared mixins with variables.
    You can store all kinds of layouts here like: **application.sass**, **homepage.sass**, **admin.sass**
* library
  * **\*.sass** — place for groups like: buttons, text-inputs, selects, radios, checkboxes and other elements which you can combine.
    Add a link to a **config.sass** to use shared mixins with variables.
    To specify multiple *libraries* for different *layouts* move *groups* to a separate folders inside the *library*:
    /library/application/
    /library/admin/
* modules
  * **\*.sass** — use to create modules such as: **login-block.sass**, **modal.sass**, **votebar.sass**, **dropdown.sass**, **lightbox.sass** and so on
    Add a link to a **config.sass** to use shared mixins with variables.
    To specify multiple modules sets for different layouts create folders inside:
    /modules/application/
    /modules/admin/
    If module gets too big, slice it to keep code small:
    /modules/participant/info.sass
    /modules/participant/status.sass
    /modules/participant/controls.sass
    /modules/participant/states.sass

