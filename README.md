                                <Twelev-Factor App>

Twelve-factor app is a set of principles or methodology for building modernise,scalable,portable and maintainable cloud native web application architecture also known as SaaS application.SaaS stands for Software-As-A-Service,it is on demand service which provides software services to utilize by the cloud vendors.These Twelve-factor app is published by the co-founder of Heroku by the experiences and observations of the people working at Heroku.These are built for agility and rapid deployment.

1.  Codebase:
    "There should be exactly one codebase for a service for many deployments" it refers that codebase is human written source code and each such codebase is managed in Version Control System like git,svn.So for all environment only one codebase is good practise don't maintain multiple repositories.

2.  Dependencies:
    "Explicitly declare and isolate dependencies" it refers that dependencies should not integrated tightly with application.hence it states that we must always declare the dependencies in the manifest so that it increases the speed of the development.

3.  Config:
    "Store config in environment" it refers that the source code and the configuration must be completely seprated from each other.We should store Db,Credentials and URLs in environment variables.

4.  Backing Services:
    "Treat backing services as attached resources" it refers that any application that consumes over the network known as backing services.Keep external components like DB,email servers,message brokers independent.It provides flexibilty and efficiency in SDLC.

5.  Build,Release and Run:
    "Strictly separate built and run stages" it refers that the application must be properly seperated into three non-dependent phases so we have to build the source code and maintain build artifacts.Second phase release,take the artifact file and last phase includes the running of the instances of the application.

6.  Processes:
    "Execute the application as one or more stateless processes" it refers that if the instances are created and destroyed any time can not effect on the overall performance.Stateless process makes the scaling easier,operates independently to serve requests.

7.  Port Binding:
    "Export services via port binding" it refers that Application should be identificable to the network by port numbe.It exports HTTP as a service and doesn't require any server like tomcat for request.Objective is the best way to expose a process to the network.

8.  Concurrency:
    "Scale out via the process model" it refers that the an application must be divided into smaller processes instead of single large application and each of the process must be able to start,terminate and replicate itself at any time.

9.  Disposability:
    "Maximize robustness with fast startup and graceful shutdown" it refers that it performs the housekeeping tasks before start.Basically robustness define as fast starting and termination of its processes and before shutdown it ensures that all connection and network are terminated properly.

10. Development/Production Parity:
    "Keep development, staging, and production as similar as possible" it refers that the processes being used and the technologies must be same.This help in contionusly development of our application and reduces the development time.

11. Logs:
    "Treat logs as event streams" it refers that the internal working of the application are generally stored in filename "logFile" in storage and when a request enters into system then these are treated as a sequence of events.

12. Admin Processes:
    "Run admin/management tasks as one-off processes" it refers that any needed admin tasks should be kept in source control and packaged with the application.Use built-in tool of the execution environment to run those scripts.

                               <Atomic Design>

    Atomic Design is methodology for creating and maintaining robust design systems, allowing you to roll out higher quality, more consistent UIs faster.Basically it has 5 distinct levels in atomic design :

    1. Atom:
       Atoms are the basic building blocks of matter, then the atoms of our interfaces serve as the building blocks that comprise all our user interfaces. These atoms include basic HTML elements like form labels, inputs, buttons.

    2. Molecules:
       Molecules are groups of atoms bonded together that take on different new properties. For example, water molecules and hydrogen peroxide molecules have their own unique properties and behave quite differently, even though they’re made up of the same atomic elements.

    3. Organisms:
       Organisms are complex UI components consist of groups of molecules and atoms and other organisms. These organisms form distinct sections of an interface.

    4. Templates:
       Templates are page-level objects that place components into a layout and articulate the design’s underlying content structure,it provides context relatively abstract molecules and organisms.

    5. Pages:
       Pages are specific instances of templates that show what a UI looks like with real representative content.The page stage is the most important stage of atomic design.
