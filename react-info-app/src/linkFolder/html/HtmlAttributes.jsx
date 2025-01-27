import LearnHtml from '../LearnHtml';
import att from './att.png'

const HtmlAttributes = () => {
  return (
    <>
    <div className="row">
        <div class="col-md-2 customDiv">
       <LearnHtml/>
        </div>
        <div class="col-md-8">
        <h2>HTML Attributes</h2>
      <h5>HTML attributes provide additional information about HTML elements.</h5>
      <h3>HTML Attributes</h3>
      <p>All HTML elements can have attributes
        Attributes provide additional information about elements.
        Attributes are always specified in the start tag.
        Attributes usually come in name/value pairs like: name="value"
</p>
      <h3>The href Attribute</h3>
      <p>The "a" tag defines a hyperlink. The href attribute specifies the URL of the page </p>
      <h3>The src Attribute</h3>
      <p>The "img" tag is used to embed an image in an HTML page. The src attribute specifies the path to the image</p>
      <h5>There are two ways to specify the URL in the src attribute:</h5>
      <p>
      1. Absolute URL - Links to an external image that is hosted on another website. Example: src="https://www.w3schools.com/images/img_girl.jpg".

      Notes: External images might be under copyright. If you do not get permission to use it, you may be in violation of copyright laws. In addition, you cannot control external images; it can suddenly be removed or changed.

      2. Relative URL - Links to an image that is hosted within the website. Here, the URL does not include the domain name. If the URL begins without a slash, it will be relative to the current page. Example: src="img_girl.jpg". If the URL begins with a slash, it will be relative to the domain. Example: src="/images/img_girl.jpg".
      </p>
      <h3>The width and height Attributes</h3>
      <p>The "img" tag should also contain the width and height attributes, which specify the width and height of the image (in pixels)</p>
      <h3>The alt Attribute</h3>
      <p>The required alt attribute for the img tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to a slow connection, or an error in the src attribute, or if the user uses a screen reader.</p>
      <img src={att} alt="" style={{width:"900px", height:"130px"}}/>
      <br />
        </div>
      </div>
      
    </>
  )
}

export default HtmlAttributes
