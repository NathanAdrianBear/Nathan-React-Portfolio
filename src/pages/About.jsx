import ScholasticLogo from '../assets/scholastic.jpeg'
import MWLogo from '../assets/midwesternlogo.png'
import GoLocalLogo from '../assets/golocalinteractivelogo.png'
import XenoMediaLogo from '../assets/xenomedialogo.png'
import BearGroupLogo from '../assets/beargrouplogo.jpeg'
import ImageBubble from '../components/ImageBubble'

const About = () => {
	return (
		<div className="page page__about">
			<h1>My Experience</h1>
			<div className="page__about__info">
        <div className="page__about__info__job">
          <div className="page__about__info__job__logo">
            <img src={ BearGroupLogo } alt="Bear Group Logo" />
          </div>
          <div className="page__about__info__job__desc">
            <p><strong>Job Title:</strong> Web Developer</p>
            <p><strong>Techonologies:</strong> HTML, CSS/SASS, Gulp, Javascript, Tailwind, React, Next.js, Drupal 9/10, Shopify, Magento, PHP, Docker, Figma, Photoshop, Github, Bitbucket, Jira</p>
            <p><strong>Highlights:</strong></p>
            <p>
              <ul>
                  <li>Developed a reusable base theme with custom components for Drupal, streamlining development across future projects</li>
                  <li>Maintained and upgraded all Drupal sites, handling both minor patches and major version updates</li>
                  <li>Migrated Gimme Beauty’s website from Sanity.io to Shopify, improving site stability and maintainability</li>
                  <li>Ensured all websites were fully ADA compliant, enhancing accessibility for all users</li>
                  <li>Implemented A/B testing with Visually.io, enabling the strategy team to make data-driven decisions</li>
                  <li>Created a landing page for Clearly Filtered that helped gain major sales for them</li>
                  <li>Designed and launched a high-converting landing page for Clearly Filtered, contributing to a significant increase in sales</li>
                  <li>Overhauled Moroso’s Magento site using Page Builder, built a custom mega menu, and integrated Elasticsearch to boost performance and search relevance</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="page__about__info__job">
          <div className="page__about__info__job__logo">
            <img src={ XenoMediaLogo } alt="Xeno Media Logo"/>
          </div>
          <div className="page__about__info__job__desc">
            <p><strong>Job Title:</strong> Front-end Engineer</p>
            <p><strong>Techonologies:</strong> HTML, CSS/SASS, Gulp/Webpack, Javascript/Jquery, PHP, Docker, Wordpress, Drupal 8/9, Photoshop, Github, Jira</p>
            <p><strong>Highlights:</strong></p>
            <p>
              <ul>
                <li>Contributed to various Allstate Insurance web pages using the Laravel framework</li>
                <li>Coded out landing pages for the Nubu site based on provided designs, using Drupal 9</li>
                <li>Supported development of the Clarisse e-commerce site built on WooCommerce for WordPress</li>
                <li>Leveraged the Rain theme in Drupal to streamline site builds and improve efficiency</li>
                <li>Helped design and develop the Element Food Solutions website from concept to launch</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="page__about__info__job">
          <div className="page__about__info__job__logo">
            <img src={ GoLocalLogo } alt="Go Local Interactive Logo" />
          </div>
          <div className="page__about__info__job__desc">
            <p><strong>Job Title:</strong> Software Engineer I/II/III</p>
            <p><strong>Techonologies:</strong> HTML, CSS/SASS, Webpack, Javascript/Jquery, PHP, Wordpress, Laravel, Vue, Photoshop, Bitbucket, Clickup</p>
            <p><strong>Highlights:</strong></p>
            <p>
              <ul>
                <li>Helped develop a reusable WordPress theme tailored for storage clients, allowing faster site setups using our Storage Essentials software</li>
                <li>Built a custom Google Leads API using the Lumen framework to capture and route lead form submissions to designated recipients</li>
                <li>Made front-end enhancements to our Storage Essentials platform using Vue.js</li>
                <li>Contributed to various client sites, including banking and pest control solutions</li>
                <li>Got promoted to a Software Engineer II, and helped Software Engineer I's when necessary</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="page__about__info__job">
          <div className="page__about__info__job__logo">
            <img src={ MWLogo } alt="Midwestern Interactive Logo" />
          </div>
          <div className="page__about__info__job__desc">
            <p><strong>Job Title:</strong> Web/Software Engineer</p>
            <p><strong>Techonologies:</strong> HTML, CSS/SASS, Gulp/Webpack, Javascript/Jquery, PHP, Laravel, Vue, Expression Engine, Photoshop, Bitbucket, Basecamp</p>
            <p><strong>Job Duties:</strong></p>
          </div>
        </div>
        <div className="page__about__info__job">
          <div className="page__about__info__job__logo">
            <img src={ ScholasticLogo } alt="Scholastic Logo" />
          </div>
          <div className="page__about__info__job__desc">
            <p><strong>Job Title:</strong> Front-End Developer Intern</p>
            <p><strong>Techonologies:</strong> HTML, CSS, Javascript/Jquery</p>
            <p><strong>Job Duties:</strong></p>
          </div>
        </div>
			</div>
		</div>
	)
}

export default About