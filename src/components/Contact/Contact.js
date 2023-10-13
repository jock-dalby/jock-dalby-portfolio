import './Contact.scss';

import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useRef } from 'react';
import { Loader } from 'react-loaders';

import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3g28b5b',
        'template_ehrjuvx',
        form.current,
        '4KNt4MVOkHt1tYcho'
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <AnimatedLetters delay={3000} str="Contact me" idx={15} />
          <p>
            I am interested in discussing any Frontend JS developer
            opportunities. However, if you have any other requests or questions,
            don't hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Jock Dalby,
          <br />
          Gold Coast,
          <br />
          Australia
          <br />
          <br />
          <span>jockdalby86@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-28.0677, 153.3974]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-28.0677, 153.3974]}>
              <Popup>Jock lives here, please reach out for a coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
