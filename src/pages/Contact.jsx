export default function Contact() {
  const handleFormSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formInputData = Object.fromEntries(formData.entries());

    console.log(formInputData);
  };
  return (
    <section className='section-contact'>
      <h1 className='container-title'>Contact Us</h1>

      <div className='contact-wrapper'>
        <form onSubmit={handleFormSubmit}>
          <input
            type='text'
            required
            autoComplete='off'
            name='username'
            placeholder='Enter your name'
          />
          <input
            type='email'
            required
            autoComplete='off'
            name='useremail'
            placeholder='Enter your email'
          />
          <textarea
            required
            autoComplete='off'
            name='message'
            rows='10'
            placeholder='Enter your message'
          ></textarea>
          <button type='submit' value='Send'>
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
}
