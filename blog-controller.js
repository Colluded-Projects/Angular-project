// blog-controller.js
angular.module('blogVibeApp') // Assumes 'blogVibeApp' is defined in app.js and includes 'ngSanitize'
.controller('BlogController', function($scope) {
    $scope.logo = { textPart1: "Blog", textPart2: "Vibe" };
    $scope.navItems = [
        { id: "home", name: "Home", link: "index.html" },
        { id: "blog", name: "Blog", link: "blog.html" },
        { id: "trending", name: "Trending", link: "trending.html" },
        { id: "about", name: "About", link: "about.html" },
        { id: "team", name: "Team", link: "team.html" },
        { id: "contact", name: "Contact", link: "contact.html" }
    ];
    $scope.currentYear = new Date().getFullYear();
    $scope.activePageId = "blog";

    $scope.pageTitle = "Our Blog"; // Slightly changed title
    $scope.pageSubtitle = "Explore our diverse collection of articles, insights, and stories";

    $scope.categories = ["All", "Technology", "Lifestyle", "Design", "Business", "Travel"]; // Added Travel
    $scope.selectedCategory = "All";
    $scope.sortOptions = ["Latest", "Popular", "Oldest"];
    $scope.selectedSort = "Latest";

    const LOREM_IPSUM_PARAGRAPH = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const LOREM_IPSUM_SHORT = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";

    const allPosts = [
        {
            id: 1, image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            category: "Technology", title: "The Future of Web Development: Trends in 2024",
            description: "Exploring AI integration, serverless, PWAs, and the evolution of JavaScript frameworks in web development.",
            author: "Sarah Johnson", date: "May 15, 2024", views: 1350, readTime: "6 min read",
            content: `<h2>Web Dev Evolved</h2><p>Key trends include AI-powered development tools, advancements in WebAssembly, and the rise of micro-frontends. ${LOREM_IPSUM_PARAGRAPH}</p>`
        },
        {
            id: 2, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            category: "Lifestyle", title: "Building Sustainable Habits: A Complete Guide",
            description: "Practical strategies and the psychology behind forming lasting habits for personal and professional transformation.",
            author: "Michael Chen", date: "May 10, 2024", views: 1020, readTime: "8 min read",
            content: `<h2>Habits That Stick</h2><p>This guide focuses on micro-habits, understanding habit loops (cue, routine, reward), and tracking progress for sustainable change. ${LOREM_IPSUM_PARAGRAPH}</p>`
        },
        {
            id: 3, image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
            category: "Design", title: "The Timeless Appeal of Minimalist Design",
            description: "How 'less is more' creates powerful, user-friendly interfaces that stand the test of time in visual communication.",
            author: "Emma Wilson", date: "May 5, 2024", views: 1550, readTime: "7 min read",
            content: `<h2>Minimalism in Design</h2><p>Core principles: purposeful elements, ample white space, strong typography, and limited color palettes for clarity and impact. ${LOREM_IPSUM_PARAGRAPH}</p>`
        },
        {
            id: 4, image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
            category: "Business", title: "Remote Work Revolution: Thriving in Distributed Teams",
            description: "Essential strategies for productivity, team cohesion, and effective communication in today's remote work environments.",
            author: "David Rodriguez", date: "Apr 28, 2024", views: 820, readTime: "7 min read",
            content: `<h2>Remote Team Success</h2><p>Covers tools for collaboration, managing virtual meetings, and fostering a positive remote company culture. ${LOREM_IPSUM_PARAGRAPH}</p>`
        },
        {
            id: 5, image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
            category: "Travel", title: "Hidden Gems: Unforgettable Off-the-Beaten-Path Destinations",
            description: "Discover breathtaking, lesser-known travel spots that offer unique experiences away from the usual tourist trails.",
            author: "Sophia Lorenzi", date: "Apr 22, 2024", views: 1150, readTime: "9 min read",
            content: `<h2>Unique Journeys</h2><p>Features secluded beaches, mountain retreats, and charming villages, complete with travel tips. ${LOREM_IPSUM_PARAGRAPH}</p>`
        },
        {
            id: 6, image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            category: "Technology", title: "Decoding Machine Learning: A Beginner's Introduction",
            description: "Demystifying core ML concepts, algorithms, and how AI is transforming industries, explained for newcomers.",
            author: "Alex Thompson", date: "Apr 15, 2024", views: 1780, readTime: "10 min read",
            content: `<h2>Intro to ML</h2><p>Explores supervised vs. unsupervised learning, neural networks at a high level, and real-world applications. ${LOREM_IPSUM_PARAGRAPH}</p>`
        },
        {
            id: 7, image: "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
            category: "Lifestyle", title: "Mindfulness in the Digital Age: Finding Balance",
            description: "Techniques to cultivate mindfulness and reduce stress amidst the constant connectivity of modern life.",
            author: "Dr. Evelyn Reed", date: "Apr 10, 2024", views: 950, readTime: "6 min read",
            content: `<h2>Digital Detox & Mindful Living</h2><p>Practical tips for digital decluttering, meditation practices, and being present in daily activities. ${LOREM_IPSUM_PARAGRAPH}</p>`
        },
        {
            id: 8, image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
            category: "Design", title: "The Power of Color Psychology in Branding",
            description: "How different colors evoke emotions and influence consumer perception in brand identity and marketing.",
            author: "Carlos Fenoll", date: "Apr 5, 2024", views: 1280, readTime: "7 min read",
            content: `<h2>Colors That Speak</h2><p>Analyzes the meaning of various colors and successful brand examples that leverage color psychology. ${LOREM_IPSUM_PARAGRAPH}</p>`
        },
        {
            id: 9, image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
            category: "Business", title: "Startup Scaling: From Idea to Market Leader",
            description: "Key strategies for growing your startup, securing funding, building a team, and navigating market challenges.",
            author: "Priya Sharma", date: "Mar 28, 2024", views: 1100, readTime: "9 min read",
            content: `<h2>Scaling Your Venture</h2><p>Covers product-market fit, growth hacking techniques, and leadership skills needed for scaling. ${LOREM_IPSUM_PARAGRAPH}</p>`
        },
        {
            id: 10, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
            category: "Travel", title: "Solo Adventures: Tips for Safe and Enriching Travel",
            description: "A comprehensive guide for solo travelers, covering safety tips, planning, and embracing the journey alone.",
            author: "Marco Bianchi", date: "Mar 20, 2024", views: 990, readTime: "8 min read",
            content: `<h2>Traveling Solo Safely</h2><p>Includes advice on choosing destinations, packing light, meeting people, and staying safe while exploring independently. ${LOREM_IPSUM_PARAGRAPH}</p>`
        },
        {
            id: 11, image: "https://media.istockphoto.com/id/1435605327/photo/cybersecurity-concept-global-network-security-technology-business-people-protect-personal.jpg?s=2048x2048&w=is&k=20&c=c05-v-V0DiMu7X4ldqZ19GBi7cTrO7TelJKNR-59uAs=", // Example of a slightly different looking image URL
            category: "Technology", title: "Cybersecurity Basics: Protecting Your Digital Life",
            description: "Essential tips for individuals and small businesses to safeguard against common online threats and protect data.",
            author: "Kenji Tanaka", date: "Mar 12, 2024", views: 1420, readTime: "7 min read",
            content: `<h2>Digital Safety 101</h2><p>Covers password management, recognizing phishing scams, securing home networks, and data backup strategies. ${LOREM_IPSUM_PARAGRAPH}</p>`
        },
        {
            id: 12, image: "https://imgs.search.brave.com/TrPVflg6_qxzEYboh3budgEnCzZArcaiVofQJcpcjiQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zc2wu/Y2RuLXJlZGZpbi5j/b20vcGhvdG8vMjM1/L21icGhvdG92Mi8x/NDQvZ2VuTWlkLlBB/TUMyMDE3MTQ0XzIx/XzEuanBn",
            category: "Lifestyle", title: "The Joy of Decluttering: A Path to a Calmer Home",
            description: "Marie Kondo inspired techniques and the psychological benefits of decluttering your living spaces for a more peaceful life.",
            author: "Clara Oswald", date: "Mar 5, 2024", views: 1050, readTime: "6 min read",
            content: `<h2>Tidy Home, Tidy Mind</h2><p>Explores different decluttering methods, how to let go of items, and organizing tips for a serene environment. ${LOREM_IPSUM_PARAGRAPH}</p>`
        }
    ];

    $scope.filteredPosts = [...allPosts];

    $scope.filterByCategory = function(category) {
        $scope.selectedCategory = category;
        let categorySpecificPosts = [];

        if (category === "All") {
            categorySpecificPosts = [...allPosts];
        } else {
            categorySpecificPosts = allPosts.filter(post => post.category === category);
        }

        if (categorySpecificPosts.length > 0 && categorySpecificPosts.length < 3 && category !== "All") { // Min 3 logic not for "All"
            let finalDisplayPosts = [...categorySpecificPosts];
            const needed = 3 - categorySpecificPosts.length;
            let addedCount = 0;
            const includedIds = new Set(finalDisplayPosts.map(p => p.id));

            for (let i = 0; i < allPosts.length && addedCount < needed; i++) {
                const potentialFillerPost = allPosts[i];
                if (!includedIds.has(potentialFillerPost.id)) {
                    finalDisplayPosts.push(potentialFillerPost);
                    includedIds.add(potentialFillerPost.id);
                    addedCount++;
                }
            }
            $scope.filteredPosts = finalDisplayPosts;
        } else {
            $scope.filteredPosts = categorySpecificPosts;
        }
        $scope.currentPage = 1;
    };

    $scope.openPost = function(postId) {
        const post = allPosts.find(p => p.id === postId);
        if (post) {
            alert("Simulating opening post: " + post.title + "\n\nFull content would be shown on a dedicated page.");
        } else {
            const filteredPost = $scope.filteredPosts.find(p => p.id === postId);
            if (filteredPost) {
                 alert("Simulating opening post: " + filteredPost.title + "\n\nFull content would be shown on a dedicated page.");
            } else {
                console.error("Post not found with ID:", postId);
                alert("Sorry, this post could not be found.");
            }
        }
    };

    // Update Sidebar Data based on the new allPosts
    $scope.sidebar = {
        // Show the 3 most recent posts (assuming higher ID = more recent for this mock data)
        recentPosts: [...allPosts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3)
                                 .map(p => ({id: p.id, title: p.title, date: p.date, views: p.views})),
        categories: $scope.categories.filter(c => c !== "All").map(categoryName => {
            return {
                name: categoryName,
                count: allPosts.filter(p => p.category === categoryName).length
            };
        }),
        popularTags: ["Web Development", "Minimalism", "AI", "Remote Work", "Habits", "Travel Tips", "Cybersecurity", "Branding", "Startups"] // Updated tags
    };

    // Pagination
    $scope.currentPage = 1;
    $scope.postsPerPage = 6; // Adjusted to show more cards per page with 12 total

    $scope.totalPages = function() {
        return Math.ceil($scope.filteredPosts.length / $scope.postsPerPage);
    };
    $scope.getPages = function() {
        let pages = [];
        for (let i = 1; i <= $scope.totalPages(); i++) { pages.push(i); }
        return pages;
    };
    $scope.setCurrentPage = function(pageNumber) {
        if (pageNumber >= 1 && pageNumber <= $scope.totalPages()) { $scope.currentPage = pageNumber; }
    };
    $scope.paginatedPosts = function() {
        const begin = ($scope.currentPage - 1) * $scope.postsPerPage;
        const end = begin + $scope.postsPerPage;
        return $scope.filteredPosts.slice(begin, end);
    };
    
    $scope.footer = {
        description: "Discover compelling stories, expert insights, and fresh perspectives from our community of passionate writers. Join the conversation.",
        socialMediaLinks: [
            { name: "Facebook", char: "f", link: "#" }, { name: "Twitter", char: "t", link: "#" },
            { name: "LinkedIn", char: "in", link: "#" }, { name: "Email", char: "✉", link: "#" }
        ],
        quickLinks: {
            title: "Quick Links",
            links: [
                { name: "About Us", href: "about.html" }, { name: "Blog", href: "blog.html" },
                { name: "Trending", href: "trending.html" }, { name: "Contact", href: "contact.html" }
            ]
        },
        categoriesLinks: {
            title: "Categories",
            items: ["Technology", "Lifestyle", "Design", "Business", "Travel"]
        }
    };

    // Initialize the view, e.g. by applying the "All" filter which will use all 12 posts.
    // $scope.filterByCategory("All"); // Uncomment if you want "All" to be default and apply any min item logic (though min 3 logic is bypassed for "All")

});