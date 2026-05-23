import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";


function PricingPage() {
    return (
        <>
            <Hero />
            <LeftSection
                imageURL="models/kite.png"
                productName="TradePro"
                productDesription="Our flagship trading platform with real-time market data, advanced charting tools, customizable watchlists, and a seamless trading experience across desktop and mobile devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />

            <RightSection
                imageURL="models/console.png"
                productName="Portfolio Hub"
                productDesription="A centralized dashboard to track your investments, portfolio performance, account activity, and market insights with detailed analytics and reports."
                learnMore=""
            />

            <LeftSection
                imageURL="models/coin.png"
                productName="Invest"
                productDesription="Invest in ETFs, mutual funds, and long-term portfolios with zero commission investing and an easy-to-use mobile experience."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />

            <RightSection
                imageURL="models/kiteconnect.png"
                productName="Trading API"
                productDesription="Build trading applications, automate strategies, and integrate financial market data using our simple and developer-friendly APIs."
                learnMore=""
            />

            <LeftSection
                imageURL="models/varsity.png"
                productName="Market Academy"
                productDesription="A comprehensive learning platform with easy-to-understand lessons covering investing, options trading, technical analysis, and financial markets."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />

            <p className="text-center mt-5 mb-5">
                Want to learn more about our technology and investing tools? Explore our latest platform updates and insights.
            </p>
            <Universe />
        </>
    );
}

export default PricingPage;