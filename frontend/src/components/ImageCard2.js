import React from 'react';
import { motion } from 'framer-motion';
import pic3 from '../pics/pic3.jpeg'


const ImageCard = () => {
    const cardData = [
        {
            title: "Mark Your Calendar!",
            content: [
                "Application Deadline: March 1",
                "Interview Dates: April 15-30",
                "Decision Release: May 15"
            ],
            imgSrc: "https://images.pexels.com/photos/3184401/pexels-photo-3184401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300",
        },
        {
            title: "Funding Your Future!",
            content: [
                "Merit-based Scholarships",
                "Need-based Financial Aid",
                "Athletic Scholarships"
            ],
            imgSrc: pic3,
        },
    ];
    
    
    

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cardData.map((card, index) => (
                <motion.div 
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-xl font-bold mb-4">{card.title}</h2>
                    <ul className="list-disc list-inside mb-4">
                        {card.content.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                    <img 
                        src={card.imgSrc} 
                        alt="Illustration" 
                        className="rounded-lg mb-4" 
                        style={{ height: '400px', width: '100%', objectFit: 'cover' }} // Adjust height here
                    />
                </motion.div>
            ))}
        </div>
    );
    
};

export default ImageCard;
