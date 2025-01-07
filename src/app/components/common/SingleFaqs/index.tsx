
import { FiMinus, FiPlus } from 'react-icons/fi';

interface IFaqList {
    title: string;
    description: string;
} 

interface IFaq {
    question: string;
    answer: string;
    list?: IFaqList[];
    paragraph?: string;
}


export const faqs: IFaq[] = [
    {
        question: 'What services does Rob J Solution offer?',
        answer: 'We specialise in railway engineering, civil engineering and motorway labour supply.',
    },
    {
        question:
            'How can I contact for more information or to discuss a project?',
        answer: 'Please email office@robjsolutions.co.uk Or call 07376048091',
    },
    {
        question: 'What sets apart from other engineering firms?',
        answer: "We stand out from other labor supply companies through our commitment to excellence, reliability, and personalised service. Our rigorous selection process ensures that we provide only the most skilled and qualified workers, tailored to the specific needs of each project. With a strong focus on safety, compliance, and customer satisfaction, we build long-term partnerships with our clients by consistently delivering high-quality workforce solutions on time and within budget. Our family-owned ethos drives us to go the extra mile, offering a level of dedication and flexibility that larger companies often can't match.",
    },
    {
        question:
            'How do you ensure the safety and reliability of railway projects?',
        answer: 'We ensure the safety and reliability of railway projects through a combination of rigorous training, strict compliance with industry standards, and continuous monitoring. All our personnel undergo extensive training and certification specific to railway work, including safety protocols, signaling, and track maintenance. We also enforce stringent safety procedures on-site, regularly audit our practices, and maintain open communication with project managers to quickly address any issues. By prioritising safety and quality at every stage, we help ensure that railway projects are completed safely, efficiently, and to the highest standards of reliability',
    },
    {
        question: 'Can you handle large-scale infrastructure projects?',
        answer: 'We are capable of supplying labour to projects of any size.',
    },
    {
        question:
            'How do you address environmental concerns in motorway projects?',
        answer: 'We address environmental concerns in motorway projects through a comprehensive approach that includes:',
        list: [
            {
                title: 'Environmental Impact Assessments (EIA):',
                description:
                    'We conduct detailed EIAs to identify and evaluate potential environmental impacts before project initiation, ensuring informed decision-making.',
            },
            {
                title: 'Pollution Control:',
                description:
                    'Implement measures to manage air and water pollution, such as installing noise barriers, using low-emission construction equipment, and ensuring proper runoff treatment systems.',
            },
            {
                title: 'Wildlife Protection:',
                description:
                    'Integrate wildlife corridors and fencing to prevent animal collisions and maintain habitat connectivity, reducing impacts on local wildlife.',
            },
            {
                title: 'Habitat Restoration:',
                description:
                    'Commit to restoring natural landscapes and replanting native vegetation post-construction to support ecosystem recovery and prevent erosion.',
            },
            {
                title: 'Monitoring and Compliance:',
                description:
                    'Regularly monitor environmental impacts during and after construction to ensure compliance with regulations and adapt strategies as needed.',
            },
        ],
        paragraph:
            'By integrating these practices, we strive to minimise environmental impacts while enhancing the sustainability of motorway projects.',
    },
];


interface ISingleFaq {
    faq: IFaq;
    index: number;
    isActive: boolean;
    toggle: () => void;
  }
  
  export const SingleFaq = ({ faq, index, isActive, toggle }: ISingleFaq): React.ReactElement => {
    return (
      <div key={index}>
        <div
          className="bg-white shadow-md hover:shadow-lg my-4 cursor-pointer transition-all duration-300"
          onClick={toggle}
        >
          <div className="flex justify-between p-5">
            <div className="text-black">{faq?.question}</div>
            <div>{isActive ? <FiMinus /> : <FiPlus />}</div>
          </div>
  
          <div
            className={`px-5 transition-all duration-500 ${
              isActive ? 'opacity-100 h-auto visible mt-4 pb-5' : 'opacity-0 invisible h-0'
            }`}
          >
            <div className="text-black">{faq?.answer}</div>
            {Array.isArray(faq?.list) && (
              <ul className="my-5 ml-8 list-decimal font-medium flex flex-col gap-3">
                {faq.list.map((item, i) => (
                  <li key={i}>
                    <span className="font-medium">{item.title}</span> {item.description}
                  </li>
                ))}
              </ul>
            )}
            {faq?.paragraph && <div className="text-black">{faq.paragraph}</div>}
          </div>
        </div>
      </div>
    );
  };
  