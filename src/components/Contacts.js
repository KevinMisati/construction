import React from 'react'
 const Contacts = () => {
    return (
      <section className="contacts-container">
        <div className="contacts">
          <div className="title">
            <h2>Contacts Us</h2>
            <div className="underline"></div>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
          <form>
            <div className="container-flex">
              <div className="first-nav-contacts">
                <input placeholder="Name" name="fname" type="text" />
                <input placeholder="Email" name="email" type="email" />
                <input placeholder="Subject" name="fname" type="text" />
              </div>
              <div className="second-nav-contacts">
                <textarea cols="30" ros="70"></textarea>
              </div>
            </div>
            <div className='btn-container'>
              <button className="btn">send message</button>
            </div>
          </form>
        </div>
      </section>
    );
}

export default Contacts;
