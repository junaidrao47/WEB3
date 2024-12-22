export default function Offer() {
    return (
        <section className="bg-background text-foreground p-8">
            <h2 className="text-3xl font-bold mb-4">What do we offer?</h2>
            <p className="mb-6 text-muted-foreground">
                Funded Bull FX, not only can traders showcase their skills and earn commissions through our paper trading program, but we also offer an attractive <strong className="text-primary">REFERRAL BONUS</strong>. When you refer a friend or colleague to join our platform, you'll receive 15% of their first purchase as a bonus. This is a great way to boost your earnings while sharing the opportunity with fellow traders. Our referral program is designed to reward you for helping others discover the potential of our prop trading business.
            </p>
            <button className="bg-primary text-primary-foreground hover:bg-primary/80 py-2 px-4 rounded-lg transition-shadow shadow hover:shadow-lg">
                Get Funded
            </button>
        </section>
    );
}