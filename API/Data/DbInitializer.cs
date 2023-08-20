using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if (context.Products.Any()) return;

            var products = new List<Product>
            {
                new Product
                {
                    Name = "Angular Speedster Board 2000",
                    Description = "Suspendisse dui purus, scelerisque at, vulputate vitae.",
                    Price = 999,
                    PictureUrl = "sb-ang1.png",
                    Brand = "Angular",
                    Type = "Boards",
                    QuantityInStock = 100,
                    Tag = "Board"
                },
                new Product
                {
                    Name = "Green Angular Board 3000",
                    Description = "Suspendisse dui purus, scelerisque at, vulputate vitae.",
                    Price = 899,
                    PictureUrl = "sb-ang2.png",
                    Brand = "Angular",
                    Type = "Boards",
                    QuantityInStock = 100,
                    Tag = "Board"
                },
                new Product
                {
                    Name = "Core Board Speed Rush 3",
                    Description = "Suspendisse dui purus, scelerisque at, vulputate vitae.",
                    Price = 1000,
                    PictureUrl = "sb-core1.png",
                    Brand = "NetCore",
                    Type = "Boards",
                    QuantityInStock = 100,
                    Tag = "Board"
                },
                new Product
                {
                    Name = "Net Core Super Board",
                    Description = "Suspendisse dui purus, scelerisque at, vulputate vitae.",
                    Price = 1500,
                    PictureUrl = "sb-core2.png",
                    Brand = "NetCore",
                    Type = "Boards",
                    QuantityInStock = 100,
                    Tag = "Board"
                },
                new Product
                {
                    Name = "React Board Super Whizzy Fast",
                    Description = "Suspendisse dui purus, scelerisque at, vulputate vitae.",
                    Price = 1200,
                    PictureUrl = "sb-react1.png",
                    Brand = "React",
                    Type = "Boards",
                    QuantityInStock = 100,
                    Tag = "Board"
                },
                new Product
                {
                    Name = "Typescript Entry Board",
                    Description = "Suspendisse dui purus, scelerisque at, vulputate vitae.",
                    Price = 800,
                    PictureUrl = "sb-ts1.png",
                    Brand = "TypeScript",
                    Type = "Boards",
                    QuantityInStock = 100,
                    Tag = "Board"
                },
                new Product
                {
                    Name = "Core Blue Hat",
                    Description = "Suspendisse dui purus, scelerisque at, vulputate vitae.",
                    Price = 80,
                    PictureUrl = "hat-core1.png",
                    Brand = "NetCore",
                    Type = "Hats",
                    QuantityInStock = 100,
                    Tag = "Hat"
                },
                new Product
                {
                    Name = "Green React Woolen Hat",
                    Description = "Suspendisse dui purus, scelerisque at, vulputate vitae.",
                    Price = 80,
                    PictureUrl = "hat-react1.png",
                    Brand = "React",
                    Type = "Hats",
                    QuantityInStock = 100,
                    Tag = "Hat"
                },
                new Product
                {
                    Name = "Purple React Woolen Hat",
                    Description = "Suspendisse dui purus, scelerisque at, vulputate vitae.",
                    Price = 80,
                    PictureUrl = "hat-react2.png",
                    Brand = "React",
                    Type = "Hats",
                    QuantityInStock = 100,
                    Tag = "Hat"
                },
                new Product
                {
                    Name = "Blue Code Gloves",
                    Description = "Suspendisse dui purus, scelerisque at, vulputate vitae.",
                    Price = 40,
                    PictureUrl = "glove-code1.png",
                    Brand = "VS Code",
                    Type = "Gloves",
                    QuantityInStock = 100,
                    Tag = "Gloves"
                },
                new Product
                {
                    Name = "Green Code Gloves",
                    Description = "Suspendisse dui purus, scelerisque at, vulputate vitae.",
                    Price = 40,
                    PictureUrl = "glove-code2.png",
                    Brand = "VS Code",
                    Type = "Gloves",
                    QuantityInStock = 100,
                    Tag = "Gloves"
                },
                new Product
                {
                    Name = "Purple React Gloves",
                    Description = "Suspendisse dui purus, scelerisque at, vulputate vitae.",
                    Price = 35,
                    PictureUrl = "glove-react1.png",
                    Brand = "React",
                    Type = "Gloves",
                    QuantityInStock = 100,
                    Tag = "Gloves"
                },
                new Product
                {
                    Name = "Green React Gloves",
                    Description = "Suspendisse dui purus, scelerisque at, vulputate vitae.",
                    Price = 35,
                    PictureUrl = "glove-react2.png",
                    Brand = "React",
                    Type = "Gloves",
                    QuantityInStock = 100,
                    Tag = "Gloves"
                },
                new Product
                {
                    Name = "Redis Red Boots",
                    Description = "Suspendisse dui purus, scelerisque at, vulputate vitae.",
                    Price = 500,
                    PictureUrl = "boot-redis1.png",
                    Brand = "Redis",
                    Type = "Boots",
                    QuantityInStock = 100,
                    Tag = "Boots"
                },
                new Product
                {
                    Name = "Core Red Boots",
                    Description = "Suspendisse dui purus, scelerisque at, vulputate vitae.",
                    Price = 500,
                    PictureUrl = "boot-core2.png",
                    Brand = "NetCore",
                    Type = "Boots",
                    QuantityInStock = 100,
                    Tag = "Boots"
                },
                new Product
                {
                    Name = "Core Purple Boots",
                    Description = "Suspendisse dui purus, scelerisque at, vulputate vitae.",
                    Price = 400,
                    PictureUrl = "boot-core1.png",
                    Brand = "NetCore",
                    Type = "Boots",
                    QuantityInStock = 100,
                    Tag = "Boots"
                },
                new Product
                {
                    Name = "Angular Purple Boots",
                    Description = "Suspendisse dui purus, scelerisque at, vulputate vitae.",
                    Price = 400,
                    PictureUrl = "boot-ang2.png",
                    Brand = "Angular",
                    Type = "Boots",
                    QuantityInStock = 100,
                    Tag = "Boots"
                },
                new Product
                {
                    Name = "Angular Blue Boots",
                    Description = "Suspendisse dui purus, scelerisque at, vulputate vitae.",
                    Price = 400,
                    PictureUrl = "boot-ang1.png",
                    Brand = "Angular",
                    Type = "Boots",
                    QuantityInStock = 100,
                    Tag = "Boots"
                },
            };

            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}