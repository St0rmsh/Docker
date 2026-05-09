monolith:
1️⃣ Single Codebase: Everything is in one place.
2️⃣ Single Deployment: One big folder to deploy.
3️⃣ Single Database: Usually one big database for everything.
4️⃣ Scaling: Scale everything together.
5️⃣Tech Stack:  same for the whole application.
6️⃣Maintenance: Easy to maintain at first
7️⃣Complexity: Can get messy with big teams
8️⃣Time: Quick to build initially
9️⃣Deployment: Deploy the whole application at once
1️⃣0️⃣Security: More secure
1️⃣1️⃣Performance: More performant
12️⃣Database: Single Database
13️⃣Load Balancer: can have own loadbalancer
14️⃣Scaling: If load gets high then we create new server with same codebase to handle the load

if monolith service is down then the whole application will be down but in microservice if one service is down then it will not affect the whole application because all services are independent of each other


loadbalancer : nginx


microservices:
1️⃣ Multiple Codebases: Each service has its own codebase.
2️⃣ Multiple Deployment: Each service can be deployed independently.
3️⃣ Multiple Database: Each service can have its own database.
4️⃣ Scaling: Scale each service independently.
5️⃣Tech Stack: Each service can have its own tech stack.
6️⃣Maintenance: More complex to maintain
7️⃣Complexity: Can be complex to manage
8️⃣Time: Takes more time to build initially
9️⃣Deployment: Deploy each service independently
1️⃣0️⃣Security: More secure
1️⃣1️⃣Performance: More performant
12️⃣Database: Multiple Database
13️⃣Load Balancer: can have own loadbalancer
14️⃣Scaling: If load gets high then we create new server with same codebase to handle the load


yes microservice works independently in the system eg: if message service is down then it will not affect the post service and user service
