# 7-1 SASS Architecture
We are using a 7-1 architecture for our SASS. At the top-level of the directory is a single main.scss file (this is the input file) and seven subdirectories:

# Abstracts folder 
An abstracts folder contains no actual styles, just Sass mechanisms that help define styles in other directories (sometimes called "helpers"). This includes things like global variables, functions, and mixins. Each of these categories should be placed in their own appropriately-named partial file.

# Vendors folder 
The vendors folder contains any third-party stylesheets a project uses. For instance, if we wanted to use Bootstrap alongside our own custom Sass in a project, we'd download the Bootstrap stylesheet and place it here.

It also contains a vendors-extensions folder containing files intended to override/re-declare some of the vendor's defaul CSS. This is to avoid editing the vendor files themselves.

# Base folder 
Base folder contains boilerplate used throughout an entire site. This includes project-wide typography styles, and stylesheets that universally reset or normalize default CSS.

# Layout  folder 
The layout folder contains styles for different aspects of the site's structural layout (think of areas like nav bars, headers, footers, etc.)

# Components folder
The components folder contains "mini" layouts. Styles for small, reusable pieces of the site should reside here (think buttons, forms, profile pictures, etc.)

# Pages folder 
Pages folder is where page-specific styles reside. For instance, if a project contained several style rules that are only ever used on the "Contact Us" page, they'd live here in a _contact.scss file, as seen above.

# Themes folder 
A themes folder is used whenever a site has multiple themes. For instance, the example project above includes both admin and default themes. We can therefore assume this example site is styled entirely differently for logged-in admins. Perhaps to better present and accommodate the additional features an Admin has. Some websites also offer a "night mode", where the background of the site is darker with lighter-colored text for easier reading in low-light environments. An option like this would be represented in its own theme file too.


# Main.scss file
But notice there are no styles defined directly in the main.scss input file. In the 7-1 architecture all styles live in an appropriately-named partial, and are simply imported into the input file in the above order.

# Import example
In order to preserve readablilty, the main file should:
* contain only 1 @import per folder
* no new line between 2 impors from the same folder
* a new line after the last import for a folder
* file extensions & leading underscore (_) should be omitted

sass/main.scss
@import 
    'abstracts/functions',
    'abstracts/mixins',
    'abstracts/placeholders',
    'abstracts/variables';

@import
   'base/animations',
   'base/reset',
   'base/typography';
   
@import
    'components/buttons',
    'components/card',
    'components/carousel',
    'components/cover',
    'components/dropdown';
