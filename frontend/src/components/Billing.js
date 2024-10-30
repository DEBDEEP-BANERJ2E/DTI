import React from 'react';
import styles from '../styles/Billing.module.css';

const Billing = () => {
    return (
        <div className={styles.billingContainer}>
            <main className={styles.mainContent}>
                {/*<div className={styles.introBadge}>HELLO THERE,</div>*/}
                <h1 className={styles.mainTitle}>WELCOME TO UNIQUEST</h1>
                <p className={styles.subtitle}>Your gateway to university admissions!</p>
                <p className={styles.description}>
                    Ready to embark on your academic journey? UniQuest offers everything you need to navigate the
                    university admission process. From free resources to premium tools, we have you covered. Upgrade today for a seamless and enhanced admission experience!
                </p>
                <div className={styles.planContainer}>
                    <PlanCard type="Free" price="0.00" features={['Access to basic resources', 'Limited university searches', 'Basic application tracking']} />
                    <PlanCard type="Plus" price="9.99" features={['Ad-Free', 'Unlimited university searches', 'Advanced application tracking']} />
                    <PlanCard type="Premium" price="19.99" features={['Ad-Free', 'Unlimited university searches', 'Personalized admission guidance', 'Exclusive resources and tools', 'Priority support']} />
                </div>
            </main>
        </div>
    );
};

const PlanCard = ({ type, price, features }) => (
    <div className={type === 'Premium' ? `${styles.planCard} ${styles.popularPlan}` : styles.planCard}>
        <h2 className={styles.planType}>
            {type === 'Premium' && <span className={styles.crownIcon}><i className="fas fa-crown"></i></span>} {type}
        </h2>
        <p className={styles.price}>${price}/MONTH</p>
        <ul className={styles.featureList}>
            {features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                    <i className="fas fa-check"></i> {feature}
                </li>
            ))}
        </ul>
        <button className={type === 'Free' ? styles.basicButton : styles.upgradeButton}>
            {type === 'Free' ? 'Get Started' : 'Upgrade Now'}
        </button>
    </div>
);

export default Billing;
