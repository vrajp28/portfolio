import React from 'react';
import './blog.css';
import reactImage from '../../assets/icons8-react-native-96.png';
import reactImagepy from '../../assets/icons8-python-96.png';
import reactImageja from '../../assets/icons8-java-96.png';
import reactImageht from '../../assets/icons8-html-5-96.png';
import reactImagecs from '../../assets/icons8-css-filetype-96.png';
import reactImagetcss from '../../assets/icons8-tailwind-css-96.png';
import reactImagefb from '../../assets/icons8-google-firebase-console-96.png';
import reactImagegh from '../../assets/icons8-github-96.png';
import reactImageps from '../../assets/icons8-postgresql-96.png';
import reactImagemg from '../../assets/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png';
import reactImagecf from '../../assets/icons8-confluence-96.png';
import reactImageji from '../../assets/icons8-jira-96.png';
import reactImagesma from '../../assets/icons8-bookmark-96.png';
import reactImagejs from '../../assets/icons8-javascript-96.png';

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Skills</h2>

      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <img src={reactImage} alt="" className="blog__img" />
          </div>
          <div className="blog__details">
            <h3 className="blog__title">ReactJS</h3>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <img src={reactImagejs} alt="" className="blog__img" />
          </div>
          <div className="blog__details">
            <h3 className="blog__title">JavaScript</h3>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <img src={reactImagepy} alt="" className="blog__img" />
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Python</h3>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <img src={reactImageja} alt="" className="blog__img" />
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Java</h3>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <img src={reactImageht} alt="" className="blog__img" />
          </div>
          <div className="blog__details">
            <h3 className="blog__title">HTML</h3>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <img src={reactImagecs} alt="" className="blog__img" />
          </div>
          <div className="blog__details">
            <h3 className="blog__title">CSS</h3>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <img src={reactImagetcss} alt="" className="blog__img" />
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Tailwind CSS</h3>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <img src={reactImagefb} alt="" className="blog__img" />
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Firebase</h3>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <img src={reactImagegh} alt="" className="blog__img" />
          </div>
          <div className="blog__details">
            <h3 className="blog__title">GitHub</h3>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <img src={reactImageps} alt="" className="blog__img" />
          </div>
          <div className="blog__details">
            <h3 className="blog__title">PostgreSQL</h3>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <img src={reactImagemg} alt="" className="blog__img" />
          </div>
          <div className="blog__details">
            <h3 className="blog__title">MongoDB</h3>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <img src={reactImagecf} alt="" className="blog__img" />
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Confluence</h3>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <img src={reactImageji} alt="" className="blog__img" />
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Jira</h3>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <img src={reactImagesma} alt="" className="blog__img" />
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Smartsheet</h3>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Blog