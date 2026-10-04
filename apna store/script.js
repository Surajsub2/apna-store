// suraj, COMPLETE Fixed Logic & All 115 Products for Apna Kirana Store
const products = [
    // --- FOOD SECTION (Staples, Pulses, Rice) ---
    { id: 1, name: "Apna Atta", price: 320, unit: "10kg", category: "food", subCategory: "staples", img: "https://www.pillsbury.in/wp-content/uploads/2021/08/Chakki-Atta_LS.jpg" },
    { id: 2, name: "Sugar (Chini)", price: 46, unit: "1kg", category: "food", subCategory: "staples", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/95032.jpg?timestamp=2026-02-10%2017:47:46%20+0530text=Sugar" },
    { id: 3, name: "Fortune Soyabean Oil", price: 140, unit: "1L", category: "food", subCategory: "staples", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8906008818611.jpg?timestamp=2026-02-13%2018:49:44%20+0530text=Oil" },
    { id: 4, name: "Basmati Rice", price: 85, unit: "1kg", category: "food", subCategory: "rice", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/90019.jpg?timestamp=2026-02-10%2017:47:46%20+0530text=Rice" },
    { id: 5, name: "Arhar Dal (Toor)", price: 120, unit: "1kg", category: "food", subCategory: "pulses", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/97742.jpg?timestamp=2026-02-10%2017:47:46%20+0530text=Arhar" },
    { id: 6, name: "Chana Dal", price: 80, unit: "1kg", category: "food", subCategory: "pulses", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/97793.jpg?timestamp=2026-02-13%2017:28:15%20+0530text=Chana" },
    { id: 7, name: "Moong Dal", price: 120, unit: "1kg", category: "food", subCategory: "pulses", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/97754.jpg?timestamp=2026-02-10%2017:47:46%20+0530text=Moong" },
    { id: 8, name: "Tata Salt", price: 28, unit: "1kg", category: "food", subCategory: "staples", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8904043901015.jpg?timestamp=2026-02-10%2017:47:46%20+0530text=Salt" },
    { id: 36, name: "Best choice Refine Oil", price: 105, unit: "1L", category: "food", subCategory: "staples", img: "https://5.imimg.com/data5/SELLER/Default/2024/5/416451587/TC/MG/ZM/144964605/best-choice-himani-soybean-refined-oil-500x500.jpg" },
    { id: 37, name: "Fortune kachi ghani", price: 180, unit: "1L", category: "food", subCategory: "staples", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8906007288095.jpg?timestamp=2026-02-11%2014:01:03%20+0530" },
    { id: 38, name: "Black Chana (Kala Chana)", price: 80, unit: "1Kg", category: "food", subCategory: "pulses", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/97799.jpg?timestamp=2026-02-10%2017:47:46%20+0530text=BlackChana" },
    { id: 39, name: "Rajma", price: 180, unit: "1Kg", category: "food", subCategory: "pulses", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/99731.jpg?timestamp=2026-02-10%2017:47:46%20+0530text=Rajma" },
    { id: 40, name: "Kabuli chana (Chhole)", price: 100, unit: "1kg", category: "food", subCategory: "pulses", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/97823.jpg?timestamp=2026-02-10%2017:47:46%20+0530text=Chhole" },
    { id: 41, name: "Kabuli Matar", price: 60, unit: "1kg", category: "food", subCategory: "pulses", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/97809.jpg?timestamp=2026-02-10%2017:47:46%20+0530text=Matar" },
    { id: 42, name: "Suji (Rava)", price: 36, unit: "1kg", category: "food", subCategory: "staples", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8906107550085.jpg?timestamp=2026-02-10%2017:47:46%20+0530text=Suji" },
    { id: 43, name: "Besan (Gram Flour)", price: 90, unit: "1kg", category: "food", subCategory: "staples", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8906055100011.jpg?timestamp=2026-02-10%2017:47:46%20+0530text=Besan" },
    { id: 44, name: "Maida", price: 35, unit: "1kg", category: "food", subCategory: "staples", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/68944.jpg?timestamp=2024-09-15%2013:32:51%20+0530text=Maida" },
    { id: 45, name: "Chana Sattu", price: 35, unit: "200g", category: "food", subCategory: "staples", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8906122501239.jpg?timestamp=2026-02-14%2014:30:57%20+0530text=ChanaSattu" },
    { id: 50, name: "Bail kohlu Oil", price: 175, unit: "1L", category: "food", subCategory: "staples", img: "https://www.bigbasket.com/media/uploads/p/xl/40193771_1-bail-kolhu-kachi-ghani-mustard-oil.jpg" },
    { id: 51, name: "Jaggery (Gur)", price: 50, unit: "1kg", category: "food", subCategory: "staples", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/94066.jpg?timestamp=2026-02-10%2017:47:46%20+0530text=Gur" },

    // --- SPICES (MASALA) ---
    { id: 9, name: "Turmeric Powder (Haldi)", price: 70, unit: "200g", category: "spices", subCategory: "powder", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901192107220.jpg?timestamp=2026-02-10%2017:47:46%20+0530text=Haldi" },
    { id: 10, name: "Red Chilli Powder", price: 90, unit: "200g", category: "spices", subCategory: "powder", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901192106124.jpg?timestamp=2026-02-10%2017:47:46%20+0530text=RedChilli" },
    { id: 11, name: "Coriander Powder", price: 55, unit: "200g", category: "spices", subCategory: "powder", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901192104229.jpg?timestamp=2026-02-10%2017:47:46%20+0530text=Coriander" },
    { id: 12, name: "Black Pepper Powder", price: 82, unit: "100g", category: "spices", subCategory: "masala", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8904053500321.jpg?timestamp=2026-02-10%2017:51:48%20+0530text=Blackpaper" },
    { id: 13, name: "Goldie Garam Masala", price: 85, unit: "100g", category: "spices", subCategory: "masala", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8904053500987.jpg?timestamp=2026-02-10%2017:47:46%20+0530text=GoldieGaramMasala" },
    { id: 46, name: "Everest Chicken Masala", price: 5, unit: "7g", category: "food", subCategory: "spices", img: "https://image.cdn.shpy.in/285171/1685737707761_SKU-0316_0-1756231868077.png?width=600&format=webp" },
    { id: 47, name: "Everest Mutton Masala", price: 5, unit: "7g", category: "food", subCategory: "spices", img: "https://image.cdn.shpy.in/285171/1685737782846_SKU-0317_0-1756231917346.png?width=600&format=webp" },
    { id: 48, name: "Everest Fish Masala", price: 5, unit: "7g", category: "food", subCategory: "spices", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTkgTRQN3d98q4j24CXSvnqB14o1UFq-tolFMgRaeaYEWWJKJuIf89vaQPqklPomu0yFS3gfVNzU8w4wkM8LrEzF7BiLLgG" },
    { id: 49, name: "Goldiee 555 Masala", price: 30, unit: "32pac", category: "food", subCategory: "spices", img: "https://dukaan.b-cdn.net/700x700/webp/484638/a5baa948-31a9-40db-b6b3-16e050c9ebe4/1650622076700-0402d818-34f8-47f9-8356-1ef910fd31a9.jpeg" },

    // --- CLEANING SECTION ---
    { id: 14, name: "Surf Excel Easy Wash", price: 135, unit: "1kg", category: "cleaning", subCategory: "laundry", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8909106010055.jpg?timestamp=2026-02-10%2017:47:46%20+0530text=SurfExcel" },
    { id: 15, name: "Wheel Powder", price: 65, unit: "1kg", category: "cleaning", subCategory: "laundry", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8909106038943.jpg?timestamp=2026-02-13%2012:41:53%20+0530text=WheelPowder" },
    { id: 16, name: "Vim Bar", price: 10, unit: "155g", category: "cleaning", subCategory: "dishwash", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901030987618.jpg?timestamp=2026-02-10%2017:47:46%20+0530text=VimBar" },
    { id: 17, name: "Exo Dishwash Round", price: 55, unit: "500g", category: "cleaning", subCategory: "dishwash", img: "https://m.media-amazon.com/images/I/51PCOIu4ONL._AC_UF1000,1000_QL80_.jpg" },
    { id: 18, name: "Harpic Blue", price: 105, unit: "500ml", category: "cleaning", subCategory: "toilet", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901396151005.jpg?timestamp=2026-02-10%2017:47:46%20+0530text=HarpicBlue" },
    { id: 19, name: "Lizol Floor Cleaner", price: 115, unit: "500ml", category: "cleaning", subCategory: "floor", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901396122005.jpg?timestamp=2026-02-10%2017:51:48%20+0530text=LizolFloorCleaner" },
    { id: 20, name: "Comfort Conditioner", price: 60, unit: "200ml", category: "cleaning", subCategory: "laundry", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8909106021938.jpg?timestamp=2026-02-10%2017:51:48%20+0530text=ComfortConditioner" },
    { id: 61, name: "Ariel", price: 10, unit: "1 Piece", category: "cleaning", subCategory: "laundry", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/4987176291134.jpg?timestamp=2026-02-10%2017:51:48%20+0530text=Ariel" },
    { id: 62, name: "Tide", price: 10, unit: "1 Piece", category: "cleaning", subCategory: "laundry", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/4987176257468.jpg?timestamp=2026-02-10%2017:47:28%20+0530text=Tide" },
    { id: 63, name: "Lifebuoy", price: 10, unit: "1 Piece", category: "cleaning", subCategory: "soap", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901030687730.jpg?timestamp=2026-02-10%2017:47:46%20+0530text=Lifebuoy" },
    { id: 64, name: "Dettol", price: 10, unit: "1 Piece", category: "cleaning", subCategory: "soap", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901396602309.jpg?timestamp=2026-02-12%2021:00:05%20+0530text=Dettol" },
    { id: 65, name: "Lux", price: 10, unit: "1 Piece", category: "cleaning", subCategory: "soap", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8909106022683.jpg?timestamp=2026-02-14%2019:06:37%20+0530text=Lux" },

    // --- SNACKS & DAIRY ---
    { id: 21, name: "Red Label Tea", price: 150, unit: "250g", category: "snacks", subCategory: "tea_coffee", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901030893599.jpg?timestamp=2026-02-13%2017:00:10%20+0530" },
    { id: 22, name: "Taaza Tea", price: 165, unit: "250g", category: "snacks", subCategory: "tea_coffee", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901030918810.jpg?timestamp=2026-02-10%2017:47:46%20+0530" },
    { id: 23, name: "Nescafe Classic", price: 175, unit: "50g", category: "snacks", subCategory: "tea_coffee", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901058017601.jpg?timestamp=2026-02-10%2017:47:46%20+0530" },
    { id: 24, name: "Horlicks", price: 260, unit: "500g", category: "snacks", subCategory: "health_drinks", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901030820052.jpg?timestamp=2026-02-10%2017:48:49%20+0530" },
    { id: 25, name: "Maggi Noodles", price: 14, unit: "70g", category: "snacks", subCategory: "instant_food", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901058017793.jpg?timestamp=2026-02-10%2017:47:46%20+0530" },
    { id: 26, name: "Parle-G", price: 30, unit: "250g", category: "snacks", subCategory: "biscuits", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901719134869.jpg?timestamp=2026-02-14%2013:31:07%20+0530" },
    { id: 27, name: "Good Day Cookies", price: 40, unit: "200g", category: "snacks", subCategory: "biscuits", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901063092495.jpg?timestamp=2026-02-14%2013:31:12%20+0530" },
    { id: 52, name: "Patanjali Cow Ghee", price: 500, unit: "1L", category: "food", subCategory: "dairy_products", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8904422712157.jpg?timestamp=2026-02-10%2017:47:46%20+0530" },
    { id: 53, name: "Amul Butter", price: 150, unit: "500g", category: "food", subCategory: "dairy_products", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901262010016.jpg?timestamp=2026-02-14%2015:00:09%20+0530" },
    { id: 54, name: "Gyan Dahi", price: 35, unit: "400g", category: "food", subCategory: "dairy_products", img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRo588aoH0UJEcRbs1j13DmjYrerXqk_isa5AL93-ZdJta_4c6I" },
    { id: 55, name: "Amul Milk", price: 35, unit: "500ml", category: "food", subCategory: "dairy_products", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901262151368.jpg?timestamp=2026-02-14%2018:31:28%20+0530" },
    { id: 56, name: "Paneer", price: 90, unit: "250g", category: "food", subCategory: "dairy_products", img: "https://atozfoodrecipes.com/wp-content/uploads/2024/05/Paneer-1.jpg" },

    // --- PERSONAL CARE & GROOMING ---
    { id: 66, name: "Clinic Plus", price: 10, unit: "10 Piece", category: "personal_care", subCategory: "hair", img: "https://storage.googleapis.com/shy-pub/285171/1686746985827_SKU-0417_1.png" },
    { id: 67, name: "Head & Shoulders", price: 10, unit: "5 Piece", category: "personal_care", subCategory: "hair", img: "https://fetchnbuy.in/cdn/shop/products/0004682_head-shoulders-basic-clean-shampoo-sachet_550_500x500_b1f1c655-83e8-4fdc-a212-c74b7ebd4793_1920x.png?v=1633502933" },
    { id: 68, name: "Dove", price: 25, unit: "1 Piece", category: "personal_care", subCategory: "soap", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901030795589.jpg?timestamp=2026-02-14%2019:31:11%20+0530" },
    { id: 83, name: "Colgate Strong Teeth", price: 95, unit: "150g", category: "personal_care", subCategory: "oral_care", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901314765321.jpg?timestamp=2026-02-14%2013:31:23%20+0530" },
    { id: 91, name: "Gillette Mach 3 Razor", price: 450, unit: "1 Unit", category: "personal_care", subCategory: "mens_grooming", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/4987176335142.jpg?timestamp=2026-02-10%2017:47:46%20+0530" },
    { id: 99, name: "Pampers Baby ", price: 10, unit: "1 Units", category: "personal_care", subCategory: "baby_care", img: "https://storage.googleapis.com/hul-retailer-propics/ondc/17048677953468700967159917704161.jpg.png" },

    // --- DRY FRUITS ---
    { id: 77, name: "Almond (Badam)", price: 450, unit: "500g", category: "food", subCategory: "dry_fruits", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/97074.jpg?timestamp=2026-02-10%2017:47:46%20+0530" },
    { id: 78, name: "Cashew (Kaju)", price: 420, unit: "500g", category: "food", subCategory: "dry_fruits", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/38966.jpg?timestamp=2026-02-10%2017:47:46%20+0530" },
    { id: 79, name: "Walnut", price: 380, unit: "500g", category: "food", subCategory: "dry_fruits", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/92019.jpg?timestamp=2026-02-10%2017:47:46%20+0530" },
    { id: 80, name: "Pistachio (Pista)", price: 500, unit: "500g", category: "food", subCategory: "dry_fruits", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/97668.jpg?timestamp=2026-02-10%2017:47:46%20+0530" },
    { id: 81, name: "Raisins (Kishmish)", price: 120, unit: "500g", category: "food", subCategory: "dry_fruits", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/97629.jpg?timestamp=2026-02-10%2017:47:46%20+0530" },
    { id: 82, name: "Dates (Khajoor)", price: 150, unit: "500g", category: "food", subCategory: "dry_fruits", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8906006723351.jpg?timestamp=2026-02-13%2019:00:11%20+0530" },
    { id: 84, name: "Chuara White", price: 100, unit: "500g", category: "food", subCategory: "dry_fruits", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/97243.jpg?timestamp=2026-02-10%2017:51:48%20+0530" },

    // --- BEVERAGES ---
    { id: 107, name: "Coca-Cola", price: 90, unit: "2L", category: "beverages", subCategory: "cold_drinks", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901764012501.jpg?timestamp=2026-02-10%2017:51:48%20+0530" },
    { id: 112, name: "Red Bull", price: 125, unit: "250ml", category: "beverages", subCategory: "cold_drinks", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/90162602.jpg?timestamp=2026-02-10%2017:47:46%20+0530" },
    { id: 115, name: "Real Fruit Juice", price: 110, unit: "1L", category: "beverages", subCategory: "cold_drinks", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901888040350.jpg?timestamp=2026-02-10%2017:47:46%20+0530" },
    { id: 108, name: "Thums Up", price: 90, unit: "2L", category: "beverages", subCategory: "cold_drinks", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901764042508.jpg?timestamp=2026-02-10%2017:51:48%20+0530" },
    { id: 109, name: "Sprite", price: 90, unit: "2L", category: "beverages", subCategory: "cold_drinks", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8901764032400.jpg?timestamp=2026-02-10%2017:51:48%20+0530" },
    { id: 110, name: "<Mountain Dew>", price: 90, unit: "2L", category: "beverages", subCategory: "cold_drinks", img: "https://www.bbassets.com/media/uploads/p/l/40199865-2_1-mountain-dew-soft-drink.jpg" },
    { id: 111, name: "Fanta", price: 90, unit: "2L", category: "beverages", subCategory: "cold_drinks", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8902080204052.jpg?timestamp=2025-11-19%2017:34:22%20+0530" },

    // --- POOJA ITEMS ---
    { id: 28, name: "Zed Black Agarbatti", price: 10, unit: "1 Pack", category: "pooja", subCategory: "agarbatti", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8904227303338.jpg?timestamp=2026-02-10%2019:54:52%20+0530" },
    { id: 31, name: "Camphor (Kapoor)", price: 40, unit: "1 Box", category: "pooja", subCategory: "items", img: "https://s3.ap-south-1.amazonaws.com/suvidha.grocery/grocery_items/8908023033024.jpg?timestamp=2026-02-10%2017:47:46%20+0530" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentViewList = [...products]; 

function renderUI(list) {
    const container = document.getElementById('main-product-list');
    const status = document.getElementById('searchStatus');

    if (!container) return;
    container.innerHTML = "";

    if (list.length === 0 && currentViewList.length === products.length) {
        container.innerHTML = Array(8).fill(0).map(() => `
            <div class="col-md-3 col-6 mb-4">
                <div class="card h-100 shadow-sm border-0 p-2">
                    <div class="skeleton skeleton-img"></div>
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text" style="width: 50%;"></div>
                    <div class="d-flex justify-content-between mt-2">
                        <div class="skeleton skeleton-price"></div>
                        <div class="skeleton" style="height:30px; width:60px;"></div>
                    </div>
                </div>
            </div>
        `)
        .join('');
        return; 
    }
    // Status Update
    if (status) {
        status.classList.remove('d-none');
        status.innerHTML = `Showing <b>${list.length}</b> products`;
    }
    // No Results State
    if (list.length === 0) {
        container.innerHTML = `<div class="col-12 text-center py-5"><p class="text-muted">Saaman nahi mila? Suggestion box me Product dal den hm use jld se jld available kr denge.</p></div>`;
        return;
    }
    // Asli Product Rendering
    list.forEach(p => {
        const cartItem = cart.find(item => item.id === p.id);
        const qty = cartItem ? cartItem.quantity : 0;
        const discountTag = p.price > 100 ? `<div class="position-absolute top-0 start-0 bg-primary text-white small px-2 py-1 rounded-end shadow-sm" style="z-index:1; font-size:10px; font-weight:bold;">SAVE ₹15</div>` : '';

        container.innerHTML += `
            <div class="col-md-3 col-6 mb-4">
                <div class="card h-100 shadow-sm border-0 blinkit-card position-relative">
                    ${discountTag}
                    <div class="img-container" style="cursor: zoom-in;" onclick="openLightbox('${p.img}', '${p.name.replace(/'/g, "\\'")}')">
                       <img src="${p.img}" loading="lazy" class="card-img-top" alt="${p.name}">
                    </div>
                    <div class="card-body p-2 text-start">
                        <div class="product-name">${p.name}</div>
                        <div class="product-unit small text-muted">${p.unit}</div>
                        <div class="d-flex align-items-center justify-content-between mt-2">
                            <span class="product-price fw-bold text-dark">₹${p.price}</span>
                            <div class="quantity-control">
                                ${qty === 0 ? 
                                    `<button class="btn btn-sm btn-add-blinkit px-3" onclick="updateQuantity(${p.id}, 1)">ADD</button>` :
                                    `<div class="d-flex align-items-center bg-success rounded text-white px-2 py-1">
                                        <button class="btn btn-sm text-white p-0 border-0" onclick="updateQuantity(${p.id}, -1)"><i class="fa fa-minus small"></i></button>
                                        <span class="fw-bold small mx-2">${qty}</span>
                                        <button class="btn btn-sm text-white p-0 border-0" onclick="updateQuantity(${p.id}, 1)"><i class="fa fa-plus small"></i></button>
                                    </div>`
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    });
}

// --- 2. SEARCH & SUGGESTIONS ---
// Suraj: Purana logic + Naya Auto-correction (Fuzzy Search)
function searchProductMobile() {
    const input = document.getElementById('searchInputMobile');
    const suggestionBox = document.getElementById('searchSuggestions');
    const term = input.value.toLowerCase().trim();
    
    // 1. Agar search khali hai toh sab dikhao (Purana logic)
    if (term.length < 1) {
        suggestionBox.classList.add('d-none');
        renderUI(products);
        return;
    }

    // 2. Smart Matching Logic (Auto-correction)
    const matches = products.filter(p => {
        const name = p.name.toLowerCase();
        
        // Synonyms map: Hindi/English spellings ke liye
        const synonyms = {
            'ata': 'atta',
            'chini': 'sugar',
            'tel': 'oil',
            'sabun': 'soap',
            'daal': 'dal',
            'namak': 'salt',
            'colget': 'colgate'
        };

        // Check 1: Kya naam mein wahi term hai? (Normal search)
        if (name.includes(term)) return true;

        // Check 2: Kya user ne koi synonym wala word likha hai?
        return Object.keys(synonyms).some(key => 
            term.includes(key) && name.includes(synonyms[key])
        );
    });

    // 3. Suggestions List dikhana (Purana logic + Improved error message)
    if (matches.length > 0) {
        suggestionBox.classList.remove('d-none');
        suggestionBox.innerHTML = matches.slice(0, 5).map(p => `
            <div class="list-group-item list-group-item-action d-flex align-items-center border-0 py-2" 
                 onclick="selectSuggestion('${p.name.replace(/'/g, "\\'")}')">
                <i class="fa fa-search text-muted me-3 small"></i>
                <span>${p.name}</span>
            </div>
        `).join('');
    } else {
        suggestionBox.classList.remove('d-none');
        suggestionBox.innerHTML = `<div class="p-3 text-muted small text-center">Saaman nahi mila? Suggestion box me Product dal den hm use jld se jld available kr dengen.</div>`;
    }

    // 4. Products Render karna (Purana logic)
    currentViewList = matches;
    renderUI(currentViewList);
}

function selectSuggestion(name) {
    document.getElementById('searchInputMobile').value = name;
    document.getElementById('searchSuggestions').classList.add('d-none');
    currentViewList = products.filter(p => p.name === name);
    renderUI(currentViewList);
}

// --- 3. VOICE SEARCH ---
function startVoiceSearch() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("Browser support nahi karta.");

    const recognition = new SpeechRecognition();
    const mikeIcon = document.getElementById('mikeIcon');
    const searchInput = document.getElementById('searchInputMobile');

    recognition.onstart = () => {
        mikeIcon.classList.replace('fa-microphone', 'fa-circle-dot');
        mikeIcon.classList.add('text-danger');
    };

    recognition.onresult = (event) => {
        let transcript = event.results[0][0].transcript;
        transcript = transcript.replace(/[.,]/g, "").trim(); 
        searchInput.value = transcript;
        searchProductMobile();
    };

    recognition.onend = () => {
        mikeIcon.classList.replace('fa-circle-dot', 'fa-microphone');
        mikeIcon.classList.remove('text-danger');
    };
    recognition.start();
}

// --- 4. SORTING ---
function sortProducts() {
    const sortBy = document.getElementById('sortSelect').value;
    let sortedList = [...currentViewList];

    if (sortBy === "lowToHigh") {
        sortedList.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortBy === "highToLow") {
        sortedList.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (sortBy === "name") {
        sortedList.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        renderUI(currentViewList);
        return;
    }

    renderUI(sortedList);
    document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
}

// --- 5. CART & ORDERS ---
function updateQuantity(id, change) {
    const product = products.find(p => p.id === id);
    const index = cart.findIndex(item => item.id === id);

    if (index > -1) {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) cart.splice(index, 1);
    } else if (change > 0) {
        cart.push({ ...product, quantity: 1 });
    }

    // Suraj: Halka sa vibration feel hoga jab koi button dabayega
    if (change > 0 && 'vibrate' in navigator) {
        navigator.vibrate(50); 
    }

    updateCartCounter();
    renderUI(currentViewList);
}

function updateCartCounter() {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const price = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cart-count').innerText = total;
    const bar = document.getElementById('sticky-cart-bar');

    if (total > 0) {
        bar.classList.remove('d-none');
        document.getElementById('sticky-cart-count').innerText = total;
        document.getElementById('sticky-cart-total').innerText = price;
    } else {
        bar.classList.add('d-none');
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}


function sendOrderToWhatsApp() {
    const cartList = document.getElementById('cart-items-list');
    const formContainer = document.getElementById('checkout-form-container');
    const qrContainer = document.getElementById('qr-container');
    
    if (!cartList || !formContainer) return;

    if (cart.length === 0) {
        // 1. Empty Cart State (Naya wala sundar design)
        cartList.innerHTML = `
            <div class="text-center py-5">
                <i class="fa fa-shopping-basket text-muted mb-3" style="font-size: 60px; opacity: 0.2;"></i>
                <h6 class="fw-bold">Aapka cart khali hai!</h6>
                <button class="btn btn-success btn-sm rounded-pill mt-3" data-bs-dismiss="modal">Abhi Shopping Karein</button>
            </div>`;
        formContainer.classList.add('d-none');
        if (qrContainer) qrContainer.classList.add('d-none');
    } else {
        // 2. Items Display (Purana poora logic)
        cartList.innerHTML = `
            <h6 class="text-muted small mb-3">Selected Items:</h6>
            ${cart.map(item => `
                <div class="d-flex justify-content-between align-items-center mb-2 border-bottom pb-2">
                    <div>
                        <div class="fw-bold small" style="font-size: 13px;">${item.name}</div>
                        <div class="text-muted" style="font-size: 11px;">₹${item.price} x ${item.quantity}</div>
                    </div>
                    <div class="fw-bold text-success" style="font-size: 14px;">₹${item.price * item.quantity}</div>
                </div>`).join('')}
            <div class="d-flex justify-content-between mt-3 fw-bold">
                <span>Total Bill:</span>
                <span class="text-success">₹${cart.reduce((s, i) => s + (i.price * i.quantity), 0)}</span>
            </div>`;
        
        formContainer.classList.remove('d-none');
        
        // 3. Purani details auto-fill (Jo aapko chahiye tha)
        document.getElementById('custName').value = localStorage.getItem('custName') || "";
        document.getElementById('custPhone').value = localStorage.getItem('custPhone') || "";
        document.getElementById('custAddress').value = localStorage.getItem('custAddress') || "";
    }

    // Modal ko kholne ka professional tarika
    const modalElement = document.getElementById('deliveryModal');
    const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
    modalInstance.show();
}

function finalCheckout() {
    // Ye IDs ab niche wale (Line 206) modal se match hongi
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const payMethod = document.querySelector('input[name="payMethod"]:checked').value;

    if (!name || !phone || !address) return alert("Details bharna zaroori hai!");

    // 1. Success Animation Overlay dikhana (Naya Feature)
    const successOverlay = document.createElement('div');
    successOverlay.className = 'order-success-overlay';
    successOverlay.innerHTML = `
        <div class="success-icon"><i class="fa fa-check-circle"></i></div>
        <h4 class="fw-bold text-dark">Order Received!</h4>
        <p class="text-muted text-center px-3">Aapka order process ho gaya hai.<br>Suraj ji ko WhatsApp bhej rahe hain...</p>
    `;
    document.body.appendChild(successOverlay);

    // 2. WhatsApp Message taiyar karna (Aapka Purana Format)
    const ownerNumber = "+918957812308"; 
    let msg = `*📦 NAYA ORDER - APNA GHARELU PRODUCTp[*%0A--------------------------------%0A👤 *Naam:* ${name}%0A🏠 *Address:* ${address}%0A💳 *Payment:* ${payMethod}%0A--------------------------------%0A`;
    
    let total = 0;
    cart.forEach((item, i) => {
        msg += `${i + 1}. *${item.name}* - ₹${item.price * item.quantity}%0A`;
        total += item.price * item.quantity;
    });
    msg += `%0A*💰 TOTAL BILL: ₹${total}*`;

    // 3. Order History Save (Aapka Purana Logic)
    let history = JSON.parse(localStorage.getItem('orderHistory')) || [];
    history.unshift({ date: new Date().toLocaleString(), total: total, items: cart.length });
    localStorage.setItem('orderHistory', JSON.stringify(history.slice(0, 5)));

    // 4. Vibration Feel (Jo aapne pehle add kiya tha)
    if ('vibrate' in navigator) navigator.vibrate(200);

    // 5. 2.5 Second ke baad WhatsApp par bhejna
    setTimeout(() => {
        window.open(`https://wa.me/${ownerNumber}?text=${msg}`, '_blank');
        
        // Cleanup: Overlay hatana aur cart saaf karna
        document.body.removeChild(successOverlay);
        cart = [];
        updateCartCounter();
        localStorage.removeItem("cart");
        
        // Modal band karna
        const modal = bootstrap.Modal.getInstance(document.getElementById('deliveryModal'));
        if (modal) modal.hide();
    }, 2500);
}

// --- 6. UTILS (History, Lightbox, Feedback) ---
function displayOrderHistory() {
    const history = JSON.parse(localStorage.getItem('orderHistory')) || [];
    const container = document.getElementById('history-section');
    const listContainer = document.getElementById('order-history-list');

    if (history.length > 0) {
        container.classList.remove('d-none');
        listContainer.innerHTML = history.map(order => `
            <div class="history-card shadow-sm mb-3">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <div class="small text-muted">${order.date}</div>
                        <div class="fw-bold text-success">${order.items} Items Kharide</div>
                    </div>
                    <div class="fw-bold fs-5">₹${order.total}</div>
                </div>
            </div>
        `).join('');
    }
}

function openLightbox(img, title) {
    document.getElementById('lightboxImage').src = img;
    document.getElementById('lightboxTitle').innerText = title;
    new bootstrap.Modal(document.getElementById('productLightbox')).show();
}

function sendFeedback(type) {
    const ownerNumber = "+918957812308"; // suraj ji ka number
    let name = (type === 'Complaint') ? document.getElementById('compName').value : document.getElementById('suggName').value;
    let message = (type === 'Complaint') ? document.getElementById('compMessage').value : document.getElementById('suggMessage').value;
    
    if (!message) return alert("Kripya message likhein!");
    
    let emoji = (type === 'Complaint') ? '🚨' : '💡';
    let finalMsg = `*${emoji} Naya ${type} - Apna Gharelu PRODUCT*%0A%0A*Naam:* ${name || 'Guest'}%0A*Message:* ${message}`;
    window.open(`https://wa.me/${ownerNumber}?text=${finalMsg}`, '_blank');
}

// --- 7. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    renderUI([]); // Shimmer start
    setTimeout(() => {
        renderUI(products);
        displayOrderHistory();
    }, 1200);
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log("Suraj: App is ready!"))
    .catch(err => console.log("SW error", err));
}

// Suraj: Payment buttons ko highlight karne wala logic
function toggleQR(show) {
    const qr = document.getElementById('qr-container');
    const cashBtn = document.querySelector('label[for="cod"]').parentElement;
    const upiBtn = document.querySelector('label[for="online"]').parentElement;

    if (show) {
        // UPI Select hua hai
        qr.classList.remove('d-none');
        upiBtn.classList.add('payment-method-selected');
        cashBtn.classList.remove('payment-method-selected');
    } else {
        // Cash Select hua hai
        qr.classList.add('d-none');
        cashBtn.classList.add('payment-method-selected');
        upiBtn.classList.remove('payment-method-selected');
    }
}

// Suraj: Ye function category buttons ko activate karega
function displayProducts(category) {
    console.log("Category selected:", category); // Debugging ke liye
    
    if (category === 'all') {
        currentViewList = [...products];
    } else {
        // Filter logic: category match honi chahiye (food, cleaning, etc.)
        currentViewList = products.filter(p => p.category === category);
    }
    
    // UI update karo
    renderUI(currentViewList);
    
    // Professional Touch: Click karne par products par scroll karega
    const section = document.getElementById('products-section');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Suraj: Install Prompt Logic
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // Button dikhao jab app install ho sakti ho
    if(installBtn) installBtn.classList.remove('d-none');
});

if(installBtn) {
    installBtn.addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                installBtn.classList.add('d-none');
            }
            deferredPrompt = null;
        }
    });
}

// Suraj: Native Share Logic (Sabse Best for User)
function shareApp() {
    const shareData = {
        title: 'Apna Gharelu Product',
        text: '🛒 *Namaste!* niranjanpur ka apna online store ab live hai. Fresh ration aur sasta saaman ab ghar baithe mangwayein sbse km aur uchit daam pr. suraj maurya ki shop se direct delivery! 👇',
        url: window.location.origin 
    };

    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log('suraj: Shared successfully'))
            .catch((err) => console.log('Error:', err));
    } else {
        const waMsg = `${shareData.text} ${window.location.href}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(waMsg)}`, '_blank');
    }
}