export default function Widget() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-background p-8 text-left space-y-6 md:space-y-0 md:space-x-8">
            {/* Left Section */}
            <div className="flex-1 max-w-lg">
                <h1 className="text-4xl font-extrabold text-foreground mb-4 leading-snug">
                    Unleash Your Trading Potential
                </h1>
                <h2 className="text-4xl font-extrabold text-primary mb-4">
                    with <span className="bg-primary text-primary-foreground px-3 py-1 rounded-md shadow-sm">FundedBullFx</span>
                </h2>
                <p className="text-muted-foreground mt-4 mb-6">
                    Seize the opportunity to ride the bull market with our capital backing. You keep 80% of the profits, while we provide the support to help your investments thrive with confidence and security.
                </p>
                <div className="flex space-x-4">
                    <button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-2 rounded-lg shadow-md transition hover:shadow-lg">
                        Get Funded
                    </button>
                    <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-2 rounded-lg shadow-md transition hover:shadow-lg">
                        How it works
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex-1 flex justify-center">
                <img
                    // undefinedhidden="true"
                    alt="mobile-phone"
                    src="https://fundedbullfx.com/_next/image?url=%2Fimages%2FBanner%2Fbanner.png&w=1080&q=75"
                    className="w-80 rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
}