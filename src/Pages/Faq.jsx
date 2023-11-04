const Faq = () => {
    return (
        <div className="my-16">
            <h3 className="text-5xl py-6 font-bold text-center">Frequently Asked Questions</h3>
            <div className="px-2">
                <div className="collapse my-3 collapse-plus bg-base-200 dark:bg-zinc-700">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                    What is FoodSaver?
                    </div>
                    <div className="collapse-content">
                        <p>FoodSaver is an online platform designed to help you reduce food waste and manage your kitchen more efficiently. Our platform offers tools and resources to make it easy for you to track, plan, and utilize your food effectively.</p>
                    </div>
                </div>
                <div className="collapse my-3 collapse-plus bg-base-200 dark:bg-zinc-700">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    How does FoodSaver help reduce food waste?
                    </div>
                    <div className="collapse-content">
                        <p>FoodSaver helps you reduce food waste by providing features like inventory management, meal planning, expiration tracking, and recipe suggestions. These tools help you make the most of your food, reduce over-purchasing, and minimize spoilage.</p>
                    </div>
                </div>
                <div className="collapse my-3 collapse-plus bg-base-200 dark:bg-zinc-700">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    Is my data safe and private?
                    </div>
                    <div className="collapse-content">
                        <p>We take data privacy and security seriously. Your information is protected, and we do not share it with third parties. Please refer to our Privacy Policy for more details.</p>
                    </div>
                </div>
                <div className="collapse my-3 collapse-plus bg-base-200 dark:bg-zinc-700">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    Can I use FoodSaver on mobile devices?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, FoodSaver is accessible on various devices, including smartphones and tablets, so you can manage your food inventory and meal planning on the go.</p>
                    </div>
                </div>
                <div className="collapse my-3 collapse-plus bg-base-200 dark:bg-zinc-700">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    What do I do with expired or spoiled food items in my inventory?
                    </div>
                    <div className="collapse-content">
                        <p>For expired or spoiled items, we recommend proper disposal in accordance with local guidelines for food waste. FoodSaver focuses on prevention and management but cannot assist with food disposal.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;