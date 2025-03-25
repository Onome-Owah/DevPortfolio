import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-primary mb-8">Contact Information</h2>
        <p className="text-lg text-gray-700 mb-8">
          Feel free to reach out via the following methods. I look forward to connecting with you.
        </p>

        {/* Contact Information */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <ul className="space-y-4 text-lg text-gray-700">
            <li>
              <span className="font-semibold">Phone:</span> 
              <a href="tel:+447466720570" className="text-primary hover:underline">+44 7466 720570</a>
            </li>
            <li>
              <span className="font-semibold">Email:</span> 
              <a href="mailto:onomeowah@gmail.com" className="text-primary hover:underline">onomeowah@gmail.com</a>
            </li>
            <li>
              <span className="font-semibold">GitHub:</span> 
              <a href="https://github.com/Onome-Owah" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                github.com/Onome-Owah
              </a>
            </li>
            <li>
              <span className="font-semibold">LinkedIn:</span> 
              <a href="https://linkedin.com/in/onome-laura-owah-a74a4411a/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/onome-laura-owah</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
