// Sample product data
const sampleProducts = [
    // Traditional Bangles
    {
        id: '1',
        name: 'CUSTOM',
        price: '',
        // originalPrice: 150,
        image: './images/custom.jpg',
        rating: 5,
        reviewCount: 3,
        category: 'all',
        material: 'all',
        inStock: true,
        isNew: true,
        isBestseller: false,
        qty:'2 Sets'
    },
    {
        id: '21',
        name: 'Traditional & Thin - 36 Sets',
        price: 4320,
        originalPrice: 5400,
        image: './images/allthread.jpg',
        rating: 4.9,
        reviewCount: 5,
        category: 'Traditional',
        material: 'thin',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'72 Bangles',
        size:'2/4, 2/6, 2/8'
    },
    {
        id: '22',
        name: 'Traditional & Medium - 36 Sets',
        price: 4500,
        originalPrice: 5600,
        image: './images/traditional.jpg',
        rating: 4.8,
        reviewCount: 2,
        category: 'Traditional',
        material: 'medium',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'72 Bangles',
        size:'2/4, 2/6, 2/8'
    },
    {
        id: '23',
        name: 'Traditional & Large - 36 Sets',
        price: 4650,
        originalPrice: 5800,
        image: './images/trad-large.jpg',
        rating: 5,
        reviewCount: 4,
        category: 'Traditional',
        material: 'large',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'72 Bangles',
        size:'2/4, 2/6, 2/8'
    },
    {
        id: '2',
        name: 'Plain & Thin - 36 Sets',
        price: 2160,
        originalPrice: 2700,
        image: './images/plain-thin.jpg',
        rating: 4.9,
        reviewCount: 10,
        category: 'Plain Silk Thread',
        material: 'thin',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'72 Bangles',
        size:'2/4, 2/6, 2/8'
    },
    {
        id: '3',
        name: 'Plain & Medium - 36 Sets',
        price: 2250,
        originalPrice: 2800,
        image: './images/plain-medium.jpg',
        rating: 4.9,
        reviewCount: 4,
        category: 'Plain Silk Thread',
        material: 'medium',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'72 Bangles',
        size:'2/4, 2/6, 2/8'
    },
    {
        id: '4',
        name: 'Plain & Large - 36 Sets',
        price: 2400,
        originalPrice: 3000,
        image: './images/plain-large.jpg',
        rating: 5,
        reviewCount: 3,
        category: 'Plain Silk Thread',
        material: 'large',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'72 sets',
        size:'2/4, 2/6, 2/8'
    },
    {
        id: '24',
        name: 'Traditional & Thin - 24 Sets',
        price: 3200,
        originalPrice: 3600,
        image: './images/allthread.jpg',
        rating: 5,
        reviewCount: 1,
        category: 'Traditional',
        material: 'thin',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'48 Bangles',
        size:'2/4, 2/6, 2/8'
    },
    {
        id: '25',
        name: 'Traditional & Medium - 24 Sets',
        price: 3400,
        originalPrice: 3800,
        image: './images/traditional.jpg',
        rating: 4.9,
        reviewCount: 15,
        category: 'Traditional',
        material: 'medium',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'48 Bangles',
        size:'2/4, 2/6, 2/8'
    },
     {
        id: '26',
        name: 'Traditional & Large - 24 Sets',
        price: 3550,
        originalPrice: 4000,
        image: './images/trad-large.jpg',
        rating: 5,
        reviewCount: 2,
        category: 'Traditional',
        material: 'large',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'48 Bangles',
        size:'2/4, 2/6, 2/8'
    },
     {
        id: '5',
        name: 'Plain & Thin - 24 Sets',
        price: 1600,
        originalPrice: 1800,
        image: './images/plain-thin.jpg',
        rating: 4.8,
        reviewCount: 6,
        category: 'Plain Silk Thread',
        material: 'thin',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'48 Bangles',
        size:'2/4, 2/6, 2/8'
    },
    {
        id: '6',
        name: 'Plain & Medium - 24 Sets',
        price: 1700,
        originalPrice: 1900,
        image: './images/plain-medium.jpg',
        rating: 4.8,
        reviewCount: 9,
        category: 'Plain Silk Thread',
        material: 'medium',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'48 Bangles',
        size:'2/4, 2/6, 2/8'
    },
    {
        id: '7',
        name: 'Plain & Large - 24 Sets',
        price: 1790,
        originalPrice: 2000,
        image: './images/plain-large.jpg',
        rating: 4.8,
        reviewCount: 7,
        category: 'Plain Silk Thread',
        material: 'large',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'72 sets',
        size:'2/4, 2/6, 2/8'
    },
        {
        id: '25',
        name: 'Traditional & Thin - 12 Sets',
        price: 1674,
        originalPrice: 1800,
        image: './images/allthread.jpg',
        rating: 5,
        reviewCount: 4,
        category: 'Traditional',
        material: 'thin',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'24 Bangles',
        size:'2/4, 2/6, 2/8'
    },
    {
        id: '26',
        name: 'Traditional & Medium - 12 Sets',
        price: 1774,
        originalPrice: 1900,
        image: './images/traditional.jpg',
        rating: 4.8,
        reviewCount: 8,
        category: 'Traditional',
        material: 'medium',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'24 Bangles',
        size:'2/4, 2/6, 2/8'
    },
     {
        id: '27',
        name: 'Traditional & Large - 12 Sets',
        price: 1870,
        originalPrice: 2000,
        image: './images/trad-large.jpg',
        rating: 5,
        reviewCount: 2,
        category: 'Traditional',
        material: 'large',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'24 Bangles',
        size:'2/4, 2/6, 2/8'
    },

    {
        id: '8',
        name: 'Plain & Thin - 12 Sets',
        price: 837,
        originalPrice: 900,
        image: './images/plain-thin.jpg',
        rating: 4.8,
        reviewCount: 10,
        category: 'Plain Silk Thread',
        material: 'thin',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'24 Bangles',
        size:'2/4, 2/6, 2/8'
    },

      {
        id: '9',
        name: 'Plain & Medium - 12 Sets',
        price: 929,
        originalPrice: 1000,
        image: './images/plain-medium.jpg',
        rating: 4.7,
        reviewCount: 24,
        category: 'Plain Silk Thread',
        material: 'medium',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'24 Bangles',
        size:'2/4, 2/6, 2/8'
    },
    {
        id: '10',
        name: 'Plain & Large - 12 Sets',
        price: 1019,
        originalPrice: 1100,
        image: './images/plain-large.jpg',
        rating: 4.8,
        reviewCount: 5,
        category: 'Plain Silk Thread',
        material: 'large',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'24 sets',
        size:'2/4, 2/6, 2/8'
    },
    {
        id: '11',
        name: 'Plain & Thin - 6 Sets',
        price: 429,
        originalPrice: 450,
        image: './images/plain-thin.jpg',
        rating: 4.8,
        reviewCount: 12,
        category: 'Plain Silk Thread',
        material: 'thin',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'12 Bangles',
        size:'2/4, 2/6, 2/8'
    },
    {
        id: '12',
        name: 'Plain & Medium - 6 Sets',
        price: 475,
        originalPrice: 500,
        image: './images/plain-medium.jpg',
        rating: 4.9,
        reviewCount: 8,
        category: 'Plain Silk Thread',
        material: 'medium',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'12 Bangles',
        size:'2/4, 2/6, 2/8'
    },
    {
        id: '13',
        name: 'Plain & Large - 6 Sets',
        price: 520,
        originalPrice: 550,
        image: './images/plain-large.jpg',
        rating: 4.7,
        reviewCount: 15,
        category: 'Plain Silk Thread',
        material: 'large',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'12 sets',
        size:'2/4, 2/6, 2/8'
    },
    {
        id: '14',
        name: 'Plain & Thin - 3 Sets',
        price: 225,
        // originalPrice: 150,
        image: './images/plain-thin.jpg',
        rating: 4.8,
        reviewCount: 12,
        category: 'Plain Silk Thread',
        material: 'thin',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'6 Bangles',
        size:'2/4, 2/6, 2/8'
    },
        {
        id: '15',
        name: 'Plain & Medium - 3 Sets',
        price: 250,
        // originalPrice: 500,
        image: './images/plain-medium.jpg',
        rating: 4.8,
        reviewCount: 30,
        category: 'Plain Silk Thread',
        material: 'medium',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'6 Bangles',
        size:'2/4, 2/6, 2/8'
    },
    {
        id: '16',
        name: 'Plain & Large - 3 Sets',
        price: 275,
        // originalPrice: 550,
        image: './images/plain-large.jpg',
        rating: 4.8,
        reviewCount: 25,
        category: 'Plain Silk Thread',
        material: 'large',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'6 sets',
        size:'2/4, 2/6, 2/8'
    },
    {
        id: '17',
        name: 'Plain & Thin - 2 Sets',
        price: 150,
        // originalPrice: 150,
        image: './images/plain-thin.jpg',
        rating: 4.9,
        reviewCount: 15,
        category: 'Plain Silk Thread',
        material: 'thin',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'4 Bangles',
        size:'2/4, 2/6, 2/8'
    },
        {
        id: '18',
        name: 'Plain & Medium - 2 Sets',
        price: 165,
        // originalPrice: 500,
        image: './images/plain-medium.jpg',
        rating: 4.9,
        reviewCount: 33,
        category: 'Plain Silk Thread',
        material: 'medium',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'4 Bangles',
        size:'2/4, 2/6, 2/8'
    },
    {
        id: '19',
        name: 'Plain & Large - 2 Sets',
        price: 180,
        // originalPrice: 550,
        image: './images/plain-large.jpg',
        rating: 4.9,
        reviewCount: 36,
        category: 'Plain Silk Thread',
        material: 'large',
        inStock: true,
        isNew: false,
        isBestseller: false,
        qty:'4 sets',
        size:'2/4, 2/6, 2/8'
    },

    // {
    //     id: '33',
    //     name: 'Antique Brass Traditional Set',
    //     price: 800,
    //     image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //     rating: 4.4,
    //     reviewCount: 67,
    //     category: 'traditional',
    //     material: 'brass',
    //     inStock: true,
    //     isNew: false,
    //     isBestseller: false,
    // },
    // {
    //     id: '4',
    //     name: 'Heritage Gold Kundan Bangles',
    //     price: 4500,
    //     originalPrice: 5200,
    //     image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //     rating: 4.9,
    //     reviewCount: 156,
    //     category: 'traditional',
    //     material: 'gold',
    //     inStock: false,
    //     isNew: false,
    //     isBestseller: true,
    // },

    // // Modern Bangles
    // {
    //     id: '5',
    //     name: 'Contemporary Rose Gold Slim Bangles',
    //     price: 1800,
    //     image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //     rating: 4.7,
    //     reviewCount: 94,
    //     category: 'modern',
    //     material: 'rose-gold',
    //     inStock: true,
    //     isNew: true,
    //     isBestseller: false,
    // },
    // {
    //     id: '6',
    //     name: 'Minimalist Silver Thread Bangles',
    //     price: 950,
    //     originalPrice: 1200,
    //     image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //     rating: 4.5,
    //     reviewCount: 73,
    //     category: 'modern',
    //     material: 'silver',
    //     inStock: true,
    //     isNew: false,
    //     isBestseller: false,
    // },
    // {
    //     id: '7',
    //     name: 'Geometric Gold Pattern Bangles',
    //     price: 3200,
    //     image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //     rating: 4.6,
    //     reviewCount: 108,
    //     category: 'modern',
    //     material: 'gold',
    //     inStock: true,
    //     isNew: true,
    //     isBestseller: false,
    // },
    // {
    //     id: '8',
    //     name: 'Sleek Platinum Thread Bangles',
    //     price: 5500,
    //     originalPrice: 6000,
    //     image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //     rating: 4.8,
    //     reviewCount: 142,
    //     category: 'modern',
    //     material: 'platinum',
    //     inStock: true,
    //     isNew: false,
    //     isBestseller: true,
    // },

    // // Designer Bangles
    // {
    //     id: '9',
    //     name: 'Artistic Designer Gold Bangles',
    //     price: 6500,
    //     originalPrice: 7500,
    //     image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //     rating: 4.9,
    //     reviewCount: 187,
    //     category: 'designer',
    //     material: 'gold',
    //     inStock: true,
    //     isNew: false,
    //     isBestseller: true,
    // },
    // {
    //     id: '10',
    //     name: 'Unique Silver Wire Art Bangles',
    //     price: 2200,
    //     image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //     rating: 4.7,
    //     reviewCount: 95,
    //     category: 'designer',
    //     material: 'silver',
    //     inStock: true,
    //     isNew: true,
    //     isBestseller: false,
    // },
    // {
    //     id: '11',
    //     name: 'Contemporary Rose Gold Sculpture',
    //     price: 4200,
    //     originalPrice: 4800,
    //     image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //     rating: 4.8,
    //     reviewCount: 129,
    //     category: 'designer',
    //     material: 'rose-gold',
    //     inStock: true,
    //     isNew: false,
    //     isBestseller: false,
    // },
    // {
    //     id: '12',
    //     name: 'Avant-garde Platinum Design',
    //     price: 8500,
    //     image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //     rating: 4.6,
    //     reviewCount: 76,
    //     category: 'designer',
    //     material: 'platinum',
    //     inStock: false,
    //     isNew: true,
    //     isBestseller: false,
    // },

    // // Antique Bangles
    // {
    //     id: '13',
    //     name: 'Vintage Gold Filigree Bangles',
    //     price: 3800,
    //     originalPrice: 4500,
    //     image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //     rating: 4.7,
    //     reviewCount: 112,
    //     category: 'antique',
    //     material: 'gold',
    //     inStock: true,
    //     isNew: false,
    //     isBestseller: false,
    // },
    // {
    //     id: '14',
    //     name: 'Heirloom Silver Engraved Set',
    //     price: 1600,
    //     image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //     rating: 4.5,
    //     reviewCount: 85,
    //     category: 'antique',
    //     material: 'silver',
    //     inStock: true,
    //     isNew: false,
    //     isBestseller: false,
    // },
    // {
    //     id: '15',
    //     name: 'Colonial Era Brass Bangles',
    //     price: 1100,
    //     originalPrice: 1400,
    //     image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //     rating: 4.3,
    //     reviewCount: 69,
    //     category: 'antique',
    //     material: 'brass',
    //     inStock: true,
    //     isNew: false,
    //     isBestseller: false,
    // },
    // {
    //     id: '16',
    //     name: 'Victorian Rose Gold Collection',
    //     price: 5200,
    //     image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //     rating: 4.8,
    //     reviewCount: 134,
    //     category: 'antique',
    //     material: 'rose-gold',
    //     inStock: true,
    //     isNew: false,
    //     isBestseller: true,
    // },
];

// Categories data
const categories = [
    { 
        id: 'all', 
        name: 'All Bangles', 
        image: './images/all.jpg', 
        count: 28 
    },
    { 
        id: 'Plain Silk Thread', 
        name: 'Plain Silk Thread', 
        image: './images/plain-medium.jpg', 
        count: 18 
    },
    { 
        id: 'Traditional', 
        name: 'Traditional', 
        image: './images/traditional.jpg', 
        count: 9 
    },
    { 
        id: 'Marriage Special', 
        name: 'Marriage Special', 
        image: './images/marriage.jpg', 
        count: 0
    },
    { 
        id: 'Festival Combo', 
        name: 'Festival Combo', 
        image: './images/festival.jpg', 
        count: 0
    },
];

// Materials data
const materials = [
    { id: 'thin', label: 'Thin', count: 9 },
    { id: 'medium', label: 'Medium', count: 9 },
    { id: 'large', label: 'Large', count: 9 },
    // { id: 'silver', label: 'Silver', count: 4 },
    // { id: 'rose-gold', label: 'Rose Gold', count: 4 },
    // { id: 'platinum', label: 'Platinum', count: 2 },
    // { id: 'brass', label: 'Brass', count: 2 },
];

// Rating options
const ratings = [5, 4, 3, 2, 1];

// Application state
let state = {
    searchQuery: '',
    selectedCategory: 'all',
    filters: {
        priceRange: [0, 10000],
        materials: [],
        ratings: [],
        inStock: false,
    },
    sortBy: 'relevance',
    viewMode: 'grid',
    cart: [],
    isFilterSidebarOpen: false,
    isCartOpen: false,
    wishlist: new Set(),
};

// DOM elements
const elements = {
    searchInput: document.getElementById('searchInput'),
    categoryGrid: document.getElementById('categoryGrid'),
    productGrid: document.getElementById('productGrid'),
    productCount: document.getElementById('productCount'),
    cartBtn: document.getElementById('cartBtn'),
    cartCount: document.getElementById('cartCount'),
    cartOverlay: document.getElementById('cartOverlay'),
    cartSidebar: document.getElementById('cartSidebar'),
    cartItems: document.getElementById('cartItems'),
    cartFooter: document.getElementById('cartFooter'),
    closeCart: document.getElementById('closeCart'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileMenu: document.getElementById('mobileMenu'),
    filterSidebar: document.getElementById('filterSidebar'),
    filterToggle: document.getElementById('filterToggle'),
    closeFilters: document.getElementById('closeFilters'),
    sortSelect: document.getElementById('sortSelect'),
    gridView: document.getElementById('gridView'),
    listView: document.getElementById('listView'),
    priceRangeMin: document.getElementById('priceRangeMin'),
    priceRangeMax: document.getElementById('priceRangeMax'),
    priceMin: document.getElementById('priceMin'),
    priceMax: document.getElementById('priceMax'),
    materialFilters: document.getElementById('materialFilters'),
    ratingFilters: document.getElementById('ratingFilters'),
    inStockOnly: document.getElementById('inStockOnly'),
    clearFilters: document.getElementById('clearFilters'),
};

// Utility functions
function formatPrice(price) {
    return price.toLocaleString('en-IN');
}

function calculateDiscount(price, originalPrice) {
    if (!originalPrice) return 0;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
}

function renderStars(rating) {
    return Array.from({ length: 5 }, (_, i) => 
        `<span class="star ${i < Math.floor(rating) ? 'filled' : ''}">★</span>`
    ).join('');
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Filter functions
function filterProducts() {
    return sampleProducts.filter(product => {
        // Search filter
        if (state.searchQuery && !product.name.toLowerCase().includes(state.searchQuery.toLowerCase())) {
            return false;
        }

        // Category filter
        if (state.selectedCategory !== 'all' && product.category !== state.selectedCategory) {
            return false;
        }

        // Price range filter
        if (product.price < state.filters.priceRange[0] || product.price > state.filters.priceRange[1]) {
            return false;
        }

        // Material filter
        if (state.filters.materials.length > 0 && !state.filters.materials.includes(product.material)) {
            return false;
        }

        // Rating filter
        if (state.filters.ratings.length > 0 && !state.filters.ratings.some(rating => product.rating >= rating)) {
            return false;
        }

        // Stock filter
        if (state.filters.inStock && !product.inStock) {
            return false;
        }

        return true;
    });
}

function sortProducts(products) {
    return [...products].sort((a, b) => {
        switch (state.sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'newest':
                return a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1;
            default:
                return 0;
        }
    });
}

// Render functions
function renderCategories() {
    elements.categoryGrid.innerHTML = categories.map(category => `
        <button class="category-card ${state.selectedCategory === category.id ? 'active' : ''}" 
                data-category="${category.id}"
                style="background-image: url('${category.image}')">
            <div class="category-content">
                <h3 class="category-title">${category.name}</h3>
                <p class="category-count">${category.count} items</p>
            </div>
        </button>
    `).join('');
}

function renderProductCard(product) {
    const discount = calculateDiscount(product.price, product.originalPrice);
    const isWishlisted = state.wishlist.has(product.id);
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                
                <div class="product-badges">
                    ${product.isNew ? '<span class="badge badge-new">New</span>' : ''}
                    ${product.isBestseller ? '<span class="badge badge-bestseller">Bestseller</span>' : ''}
                    ${discount > 0 ? `<span class="badge badge-discount">${discount}% OFF</span>` : ''}
                </div>

               

                <div class="quick-add">
                    <button class="btn btn-primary btn-full add-to-cart-quick" 
                            data-product-id="${product.id}" 
                            ${!product.inStock ? 'disabled' : ''}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="8" cy="21" r="1"></circle>
                            <circle cx="19" cy="21" r="1"></circle>
                            <path d="m2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43h-15.44"></path>
                        </svg>
                        ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                </div>

                ${!product.inStock ? '<div class="out-of-stock-overlay"><span class="badge badge-secondary">Out of Stock</span></div>' : ''}
            </div>

            <div class="product-info">
                <div class="product-category">
                    <span class="badge-category">${product.category}</span>
                </div>

                <h3 class="product-title">${product.name}</h3>
                <p>Size: ${product.size}</p>
                <b>(Quantity: ${product.qty})</b>
                
                <div class="product-rating">
                <div class="rating-stars">${renderStars(product.rating)}</div>
                <span class="rating-text">${product.rating} (${product.reviewCount})</span>
                </div>
                
               <!-- <p class="product-material">${product.material.replace('-', ' ')}</p> -->
                
                <div class="product-price-row">
                <div class="product-price">
                <span class="price-current">₹${formatPrice(product.price)}</span>
                ${product.originalPrice ? `<span class="price-original">₹${formatPrice(product.originalPrice)}</span>` : ''}
                </div>
                </div>
            </div>
        </div>
    `;
}

function renderProductList(product) {
    const discount = calculateDiscount(product.price, product.originalPrice);
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div style="display: flex; gap: 1rem; align-items: center; padding: 1rem;">
                <img src="${product.image}" alt="${product.name}" style="width: 6rem; height: 6rem; object-fit: cover; border-radius: 0.5rem;">
                
                <div style="flex: 1;">
                    <h3 style="font-weight: 600; margin-bottom: 0.5rem;">${product.name}</h3>
                    <p style="font-size: 0.875rem; color: var(--color-muted-foreground); margin-bottom: 0.5rem; text-transform: capitalize;">${product.material.replace('-', ' ')}</p>
                    
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                        <span style="font-size: 1.125rem; font-weight: 700; color: var(--color-primary);">₹${formatPrice(product.price)}</span>
                        ${product.originalPrice ? `<span style="font-size: 0.875rem; color: var(--color-muted-foreground); text-decoration: line-through;">₹${formatPrice(product.originalPrice)}</span>` : ''}
                    </div>
                    
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <div class="rating-stars">${renderStars(product.rating)}</div>
                        <span style="font-size: 0.875rem; color: var(--color-muted-foreground);">(${product.reviewCount})</span>
                    </div>
                </div>
                
                <div style="display: flex; flex-direction: column; justify-content: center;">

          
                    <button class="btn btn-primary add-to-cart-btn" 
                            data-product-id="${product.id}" 
                            ${!product.inStock ? 'disabled' : ''} 
                            style="margin-bottom: 0.5rem;">
                        ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderProducts() {
    const filteredProducts = filterProducts();
    const sortedProducts = sortProducts(filteredProducts);
    
    elements.productCount.textContent = `${filteredProducts.length} products found`;
    
    if (sortedProducts.length === 0) {
        elements.productGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 0;">
                <p style="color: var(--color-muted-foreground); margin-bottom: 1rem;">No products found matching your criteria</p>
                <p style="font-size: 0.875rem; color: var(--color-muted-foreground);">Try adjusting your filters or search terms</p>
            </div>
        `;
        return;
    }

    if (state.viewMode === 'grid') {
        elements.productGrid.className = 'product-grid';
        elements.productGrid.innerHTML = sortedProducts.map(renderProductCard).join('');
    } else {
        elements.productGrid.className = 'product-grid list-view';
        elements.productGrid.innerHTML = sortedProducts.map(renderProductList).join('');
    }
}

function renderMaterialFilters() {
    elements.materialFilters.innerHTML = materials.map(material => `
        <label class="checkbox-label">
            <input type="checkbox" value="${material.id}" ${state.filters.materials.includes(material.id) ? 'checked' : ''}>
            <span>${material.label}</span>
            <span style="margin-left: auto; color: var(--color-muted-foreground); font-size: 0.75rem;">(${material.count})</span>
        </label>
    `).join('');
}

function renderRatingFilters() {
    elements.ratingFilters.innerHTML = ratings.map(rating => `
        <label class="checkbox-label">
            <input type="checkbox" value="${rating}" ${state.filters.ratings.includes(rating) ? 'checked' : ''}>
            <span style="display: flex; align-items: center;">
                <div class="rating-stars">${renderStars(rating)}</div>
                <span style="margin-left: 0.25rem;">& above</span>
            </span>
        </label>
    `).join('');
}

function renderCartItems() {
    if (state.cart.length === 0) {
        elements.cartItems.innerHTML = `
            <div class="cart-empty">
                <p>Your cart is empty</p>
                <button class="btn btn-outline" onclick="closeCart()">Continue Shopping</button>
            </div>
        `;
        elements.cartFooter.innerHTML = '';
        return;
    }

    // Render cart items
    elements.cartItems.innerHTML = state.cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            
            <div class="cart-item-info">
                <h4 class="cart-item-title">${item.name}</h4>
                <span class="cart-item-material">${item.material.replace('-', ' ')}</span>
                
                <div class="cart-item-bottom">
                    <span class="cart-item-price">₹${formatPrice(item.price)}</span>
                    
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M5 12h14"></path>
                            </svg>
                        </button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M12 5v14m7-7H5"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            <button class="remove-item" onclick="removeFromCart('${item.id}')">
                <img src="./images/deletebtn.png" alt="">
            </button>
        </div>
    `).join('');

    // Calculate totals
    const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 1000 ? 0 : 99;
    const total = subtotal + shipping;

    // Render cart footer with Checkout button
    elements.cartFooter.innerHTML = `
        <div class="cart-summary">
            <div class="summary-row">
                <span>Subtotal</span>
                <span>₹${formatPrice(subtotal)}</span>
            </div>
            <div class="summary-row">
                <span>Shipping</span>
                <span style="color: ${shipping === 0 ? '#16a34a' : 'inherit'}">${shipping === 0 ? 'Free' : `₹${shipping}`}</span>
            </div>
            ${shipping > 0 ? '<p class="free-shipping-note">Free shipping on orders above ₹1,000</p>' : ''}
        </div>
        
        <div class="summary-total">
            <span>Total</span>
            <span class="total-amount">₹${formatPrice(total)}</span>
        </div>
        
        <button id="checkoutBtn" class="btn btn-primary btn-full btn-lg">Proceed to Checkout</button>
    `;

    // Add WhatsApp integration for checkout
    document.getElementById("checkoutBtn").addEventListener("click", function () {
    let message = "*New Order Details*\n\n";

    state.cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - ${item.material.replace('-', ' ')} x${item.quantity} - ₹${formatPrice(item.price * item.quantity)}\n`;
    });

    message += `\n*Subtotal:* ₹${formatPrice(subtotal)}`;
    message += `\n*Shipping:* ${shipping === 0 ? "Free" : "₹" + formatPrice(shipping)}`;
    message += `\n*Total:* ₹${formatPrice(total)}\n\n`;
    message += "Please confirm my order !";

    // Encode properly once
    const encodedMessage = encodeURIComponent(message);

    const phone = "919573537417"; // with country code
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(url, "_blank");
});

}


function updateCartCount() {
    const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    elements.cartCount.textContent = count;
    if (count > 0) {
        elements.cartCount.style.display = 'flex';
    } else {
        elements.cartCount.style.display = 'none';
    }
}

// Cart functions
function addToCart(productId) {
    const product = sampleProducts.find(p => p.id === productId);
    if (!product || !product.inStock) return;

    const existingItem = state.cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({ ...product, quantity: 1 });
    }

    updateCartCount();
    renderCartItems();
}

function updateCartQuantity(productId, quantity) {
    if (quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    const item = state.cart.find(item => item.id === productId);
    if (item) {
        item.quantity = quantity;
        updateCartCount();
        renderCartItems();
    }
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    updateCartCount();
    renderCartItems();
}

function toggleWishlist(productId) {
    if (state.wishlist.has(productId)) {
        state.wishlist.delete(productId);
    } else {
        state.wishlist.add(productId);
    }
    renderProducts();
}

// UI functions
function openCart() {
    state.isCartOpen = true;
    elements.cartOverlay.classList.add('open');
    elements.cartSidebar.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    state.isCartOpen = false;
    elements.cartOverlay.classList.remove('open');
    elements.cartSidebar.classList.remove('open');
    document.body.style.overflow = '';
}

function toggleMobileMenu() {
    const isOpen = elements.mobileMenu.classList.contains('hidden');
    if (isOpen) {
        elements.mobileMenu.classList.remove('hidden');
        elements.mobileMenuBtn.querySelector('.menu-icon').classList.add('hidden');
        elements.mobileMenuBtn.querySelector('.close-icon').classList.remove('hidden');
    } else {
        elements.mobileMenu.classList.add('hidden');
        elements.mobileMenuBtn.querySelector('.menu-icon').classList.remove('hidden');
        elements.mobileMenuBtn.querySelector('.close-icon').classList.add('hidden');
    }
}

function toggleFilterSidebar() {
    state.isFilterSidebarOpen = !state.isFilterSidebarOpen;
    if (state.isFilterSidebarOpen) {
        elements.filterSidebar.classList.add('open');
        document.body.style.overflow = 'hidden';
    } else {
        elements.filterSidebar.classList.remove('open');
        document.body.style.overflow = '';
    }
}

function closeFilterSidebar() {
    state.isFilterSidebarOpen = false;
    elements.filterSidebar.classList.remove('open');
    document.body.style.overflow = '';
}

function updatePriceRange() {
    const min = parseInt(elements.priceRangeMin.value);
    const max = parseInt(elements.priceRangeMax.value);
    
    if (min >= max) {
        elements.priceRangeMin.value = max - 100;
    }
    if (max <= min) {
        elements.priceRangeMax.value = min + 100;
    }
    
    state.filters.priceRange = [
        parseInt(elements.priceRangeMin.value),
        parseInt(elements.priceRangeMax.value)
    ];
    
    elements.priceMin.textContent = state.filters.priceRange[0];
    elements.priceMax.textContent = state.filters.priceRange[1];
    
    renderProducts();
}

function clearAllFilters() {
    state.filters = {
        priceRange: [0, 10000],
        materials: [],
        ratings: [],
        inStock: false,
    };
    
    elements.priceRangeMin.value = 0;
    elements.priceRangeMax.value = 10000;
    elements.priceMin.textContent = '0';
    elements.priceMax.textContent = '10000';
    elements.inStockOnly.checked = false;
    
    renderMaterialFilters();
    renderRatingFilters();
    renderProducts();
}

// Event listeners
function setupEventListeners() {
    // Search
    elements.searchInput.addEventListener('input', debounce((e) => {
        state.searchQuery = e.target.value;
        renderProducts();
    }, 300));

    // Categories
    elements.categoryGrid.addEventListener('click', (e) => {
        const categoryButton = e.target.closest('[data-category]');
        if (categoryButton) {
            state.selectedCategory = categoryButton.dataset.category;
            renderCategories();
            renderProducts();
        }
    });

    // Sort
    elements.sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderProducts();
    });

    // View mode
    elements.gridView.addEventListener('click', () => {
        state.viewMode = 'grid';
        elements.gridView.classList.add('active');
        elements.listView.classList.remove('active');
        renderProducts();
    });

    elements.listView.addEventListener('click', () => {
        state.viewMode = 'list';
        elements.listView.classList.add('active');
        elements.gridView.classList.remove('active');
        renderProducts();
    });

    // Price range
    elements.priceRangeMin.addEventListener('input', updatePriceRange);
    elements.priceRangeMax.addEventListener('input', updatePriceRange);

    // Material filters
    elements.materialFilters.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const material = e.target.value;
            if (e.target.checked) {
                state.filters.materials.push(material);
            } else {
                state.filters.materials = state.filters.materials.filter(m => m !== material);
            }
            renderProducts();
        }
    });

    // Rating filters
    elements.ratingFilters.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const rating = parseInt(e.target.value);
            if (e.target.checked) {
                state.filters.ratings.push(rating);
            } else {
                state.filters.ratings = state.filters.ratings.filter(r => r !== rating);
            }
            renderProducts();
        }
    });

    // Stock filter
    elements.inStockOnly.addEventListener('change', (e) => {
        state.filters.inStock = e.target.checked;
        renderProducts();
    });

    // Clear filters
    elements.clearFilters.addEventListener('click', clearAllFilters);

    // Mobile menu
    elements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Filter sidebar
    elements.filterToggle.addEventListener('click', toggleFilterSidebar);
    elements.closeFilters.addEventListener('click', closeFilterSidebar);

    // Cart
    elements.cartBtn.addEventListener('click', openCart);
    elements.closeCart.addEventListener('click', closeCart);
    elements.cartOverlay.addEventListener('click', closeCart);

    // Product interactions
    elements.productGrid.addEventListener('click', (e) => {
        const productId = e.target.closest('[data-product-id]')?.dataset.productId;
        if (!productId) return;

        if (e.target.closest('.add-to-cart-btn') || e.target.closest('.add-to-cart-quick')) {
            addToCart(productId);
        } else if (e.target.closest('.wishlist-btn')) {
            toggleWishlist(productId);
        }
    });

    // Close modals on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (state.isCartOpen) closeCart();
            if (state.isFilterSidebarOpen) closeFilterSidebar();
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024 && state.isFilterSidebarOpen) {
            closeFilterSidebar();
        }
    });
}

// Initialize application
function init() {
    renderCategories();
    renderMaterialFilters();
    renderRatingFilters();
    renderProducts();
    renderCartItems();
    updateCartCount();
    setupEventListeners();
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Global functions for inline event handlers
window.addToCart = addToCart;
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;
window.closeCart = closeCart;



  const backToTopBtn = document.getElementById("backToTop");

  // Show button when user scrolls down 200px
  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopBtn.style.opacity = "1";
      backToTopBtn.style.pointerEvents = "auto";
    } else {
      backToTopBtn.style.opacity = "0";
      backToTopBtn.style.pointerEvents = "none";
    }
  };

  // Scroll smoothly to top when clicked
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });