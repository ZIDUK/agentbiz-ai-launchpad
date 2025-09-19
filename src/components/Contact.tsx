const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="text-headline mb-6">
          Schedule Your <span className="gradient-text">AI Strategy Call</span>
        </h2>
        
        <p className="text-lead mb-12">
          Discover how our AI solutions can transform your business operations. 
          Select a time that works best for you and let's talk about your ROI.
        </p>
        
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/jonapardo92/30min?hide_event_type_details=1&background_color=000000&text_color=ffffff&primary_color=007bff" 
          style={{ minWidth: '320px', height: '700px', marginTop: '40px' }}
        />
      </div>
    </section>
  );
};

export default Contact;