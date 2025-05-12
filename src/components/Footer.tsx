
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="mb-4">
              <img src="/lovable-uploads/5ee42d13-ca14-4d42-adb6-82931740f75f.png" alt="Bizgurukul Logo" className="h-12" />
            </div>
            <p className="mb-6">
              Empowering Indians worldwide to achieve financial freedom through practical online income skills.
            </p>
            <div className="flex space-x-5 items-center">
              <a href="https://www.facebook.com/profile.php?id=61558166530783" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.instagram.com/biz_kerala/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="https://wa.me/919656517580?text=I'm%20interested%20in%20the%20Digital%20Marketing%20course%20with%20affiliate%20program.%20Please%20reserve%20my%20early%20bird%20slot!" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
                <img src="/lovable-uploads/f2e8e01a-a12b-4d97-b455-7ac7041fbe89.png" alt="WhatsApp" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary transition-colors">Features</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <p className="mb-4">Have questions? Our team is here to help!</p>
            <a href="https://wa.me/919656517580?text=I'm%20interested%20in%20the%20Digital%20Marketing%20course%20with%20affiliate%20program.%20Please%20reserve%20my%20early%20bird%20slot!" className="text-white hover:underline block flex items-center">
              <img src="/lovable-uploads/f2e8e01a-a12b-4d97-b455-7ac7041fbe89.png" alt="WhatsApp" className="h-6 w-6 mr-2" />
              <span className="text-base">+91 96565 17580</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Bizgurukul. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
