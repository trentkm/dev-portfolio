import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ success: false, message: "Please fill all fields" });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // For demonstration purposes - in a real app you'd send this to your API
    // Using setTimeout to simulate an API call
    setTimeout(() => {
      console.log("Form submitted: ", formData);
      
      // Simulate success
      setSubmitStatus({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon."
      });
      setIsSubmitting(false);
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
    
    // If you want to actually send emails, you'd need to use a service like
    // EmailJS, Formspree, or your own backend API
  };

  return (
    <ContactSection id="contact">
      <ContentContainer>
        <SectionTitle>Get In Touch</SectionTitle>
        
        <ContactGrid>
          <ContactInfo>
            <ContactText>
              I'm always interested in connecting with fellow developers, tech enthusiasts, and anyone with questions about my work or potential collaborations. Feel free to reach out!
            </ContactText>
            
            <ContactMethods>
              <ContactMethod>
                <ContactIcon>📧</ContactIcon>
                <ContactMethodText>
                  <ContactMethodLabel>Email</ContactMethodLabel>
                  <ContactMethodValue href="mailto:tkmorrell6@gmail.com">
                    tkmorrell6@gmail.com
                  </ContactMethodValue>
                </ContactMethodText>
              </ContactMethod>
              
              <ContactMethod>
                <ContactIcon>📍</ContactIcon>
                <ContactMethodText>
                  <ContactMethodLabel>Location</ContactMethodLabel>
                  <ContactMethodValue>Dallas, TX</ContactMethodValue>
                </ContactMethodText>
              </ContactMethod>
              
              <ContactMethod>
                <ContactIcon>👨‍💻</ContactIcon>
                <ContactMethodText>
                  <ContactMethodLabel>Current Role</ContactMethodLabel>
                  <ContactMethodValue>Software Engineer II at Amazon</ContactMethodValue>
                </ContactMethodText>
              </ContactMethod>
            </ContactMethods>
            
            <SocialLinks>
              <SocialLink href="https://www.linkedin.com/in/trenton-morrell/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </SocialLink>
              
              <SocialLink href="https://github.com/trentkm" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          
          <ContactFormContainer>
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows="5"
                  required
                />
              </FormGroup>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </SubmitButton>
              
              {submitStatus && (
                <StatusMessage success={submitStatus.success}>
                  {submitStatus.message}
                </StatusMessage>
              )}
            </ContactForm>
          </ContactFormContainer>
        </ContactGrid>
      </ContentContainer>
    </ContactSection>
  );
};

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// Styled Components
const ContactSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
  position: relative;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  z-index: 10;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: #63b3ed;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ContactInfo = styled.div`
  animation: ${fadeIn} 0.6s ease-out forwards;
`;

const ContactText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 25px;
  }
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ContactIcon = styled.div`
  font-size: 1.8rem;
  background: rgba(99, 179, 237, 0.1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: 45px;
    height: 45px;
  }
`;

const ContactMethodText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactMethodLabel = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin-bottom: 5px;
`;

const ContactMethodValue = styled.a`
  color: white;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    color: #63b3ed;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  background: rgba(17, 25, 40, 0.7);
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid rgba(99, 179, 237, 0.2);
  transition: all 0.3s ease;

  svg {
    transition: all 0.3s ease;
  }

  &:hover {
    background: rgba(17, 25, 40, 0.9);
    border-color: #63b3ed;
    transform: translateY(-3px);
    color: #63b3ed;

    svg {
      transform: scale(1.1);
    }
  }
`;

const ContactFormContainer = styled.div`
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
`;

const ContactForm = styled.form`
  background: rgba(17, 25, 40, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 30px;
  border: 1px solid rgba(99, 179, 237, 0.2);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(99, 179, 237, 0.4);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 25px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  color: white;
  margin-bottom: 8px;
  font-size: 0.95rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #63b3ed;
    box-shadow: 0 0 0 3px rgba(99, 179, 237, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 120px;

  &:focus {
    outline: none;
    border-color: #63b3ed;
    box-shadow: 0 0 0 3px rgba(99, 179, 237, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(to right, #4299e1, #63b3ed);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  font-weight: 500;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.div`
  margin-top: 15px;
  padding: 10px 15px;
  border-radius: 6px;
  font-size: 0.9rem;
  background: ${props => props.success ? 'rgba(72, 187, 120, 0.2)' : 'rgba(245, 101, 101, 0.2)'};
  color: ${props => props.success ? '#48bb78' : '#f56565'};
  border: 1px solid ${props => props.success ? 'rgba(72, 187, 120, 0.4)' : 'rgba(245, 101, 101, 0.4)'};
`;

export default Contact;
