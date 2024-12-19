export default function Global() {
    return (
        <section className="bg-background text-foreground p-8">
            <h2 className="text-3xl font-bold mb-4">What Makes Us Global Different?</h2>
            <p className="text-muted-foreground mb-8">
                FundedBullFx Global is the best proprietary firm you can find... Here's why:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                        <img
                            // undefinedhidden="true"
                            alt="trustworthy icon"
                            src="https://openui.fly.dev/openui/24x24.svg?text=🛡"
                            className="w-12 h-12"
                        />
                        <h3 className="text-xl font-semibold ml-3">Trustworthy</h3>
                    </div>
                    <p className="text-muted-foreground">
                        Over $300K+ Payouts History; Secured since our launch in August 2023, FundedBullFX has reached a "TOP PROP FIRM" level by continually listening to our clients' feedback and improving along the way to become a powerhouse of simulated trading.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                        <img
                            // undefinedhidden="true"
                            alt="smooth withdrawals icon"
                            src="https://openui.fly.dev/openui/24x24.svg?text=💸"
                            className="w-12 h-12"
                        />
                        <h3 className="text-xl font-semibold ml-3">Smooth Withdrawals</h3>
                    </div>
                    <p className="text-muted-foreground">
                        FundedBullFX is a regulated firm and is bound to initiate withdrawals within 24 hours of receiving the request.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                        <img
                            // undefinedhidden="true"
                            alt="clear rules icon"
                            src="https://openui.fly.dev/openui/24x24.svg?text=📜"
                            className="w-12 h-12"
                        />
                        <h3 className="text-xl font-semibold ml-3">Clear Rules</h3>
                    </div>
                    <p className="text-muted-foreground">
                        We have a very clear set of rules that we expect our clients to follow. We do not tolerate any form of cheating or manipulation.
                    </p>
                </div>
            </div>
        </section>
    );
}