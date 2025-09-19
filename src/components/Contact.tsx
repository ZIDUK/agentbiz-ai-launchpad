const Contact = () => {
  return (
    <section id="contact" className="section text-center">
      <div className="container max-w-5xl">
        <h2 className="text-headline mb-6">
          Schedule Your <span className="gradient-text">AI Strategy Call</span>
        </h2>
        
        <p className="text-lead mb-12 max-w-4xl mx-auto">
          Discover how our AI solutions can transform your business operations. 
          Select a time that works best for you and let's talk about your ROI.
        </p>
        
        {/* Calendly Embed */}
        <div className="bg-card rounded-2xl p-1 shadow-2xl">
          <div 
            className="calendly-inline-widget rounded-xl overflow-hidden" 
            data-url="https://calendly.com/jonapardo92/30min?hide_event_type_details=1&background_color=111111&text_color=F5F5F7&primary_color=007bff" 
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;