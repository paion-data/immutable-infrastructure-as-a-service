"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[1236],{3149:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=t(3860),s=t(5639);const i={slug:"trunk-based-deployment",title:"Trunk-Based Development",authors:["jiaqi"],tags:["CI/CD"]},o=void 0,r={permalink:"/blog/trunk-based-deployment",editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/blog/2022-04-13-trunk-deployment.md",source:"@site/blog/2022-04-13-trunk-deployment.md",title:"Trunk-Based Development",description:"Trunk-based development is a version control management practice where developers merge small, frequent updates to a",date:"2022-04-13T00:00:00.000Z",formattedDate:"April 13, 2022",tags:[{label:"CI/CD",permalink:"/blog/tags/ci-cd"}],readingTime:7.5,hasTruncateMarker:!0,authors:[{name:"Jiaqi Liu",title:"Maintainer of hashicorp-aws",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"trunk-based-deployment",title:"Trunk-Based Development",authors:["jiaqi"],tags:["CI/CD"]},unlisted:!1,prevItem:{title:"Add Custom ASCII Banner Logo to SSH Login Screen",permalink:"/blog/ssh-ascii-banner"},nextItem:{title:"Amazon S3 concepts",permalink:"/blog/aws-s3-concepts"}},l={authorsImageUrls:[void 0]},d=[{value:"What is Trunk-Based Development",id:"what-is-trunk-based-development",level:2},{value:"Gitflow vs. Trunk-Based Development",id:"gitflow-vs-trunk-based-development",level:2},{value:"Benefits of Trunk-Based Development",id:"benefits-of-trunk-based-development",level:2},{value:"Allows Continuous Code Integration",id:"allows-continuous-code-integration",level:3},{value:"Ensures Continuous Code Review",id:"ensures-continuous-code-review",level:3},{value:"Enables Consecutive Production Code Releases",id:"enables-consecutive-production-code-releases",level:3},{value:"Trunk-Based Development Best Practices",id:"trunk-based-development-best-practices",level:2},{value:"Develop in Small Batches",id:"develop-in-small-batches",level:3},{value:"Feature Flags",id:"feature-flags",level:3},{value:"Implement Comprehensive Automated Testing",id:"implement-comprehensive-automated-testing",level:3},{value:"Perform Asynchronous Code Reviews",id:"perform-asynchronous-code-reviews",level:3},{value:"Have Three or Fewer Active Branches in the Application&#39;s Code Repository",id:"have-three-or-fewer-active-branches-in-the-applications-code-repository",level:3},{value:"Merge Branches to the Trunk at Least Once a Day",id:"merge-branches-to-the-trunk-at-least-once-a-day",level:3},{value:"Reduced Number of Code Freezes and Integration Phases",id:"reduced-number-of-code-freezes-and-integration-phases",level:3},{value:"Build Fast and Execute Immediately",id:"build-fast-and-execute-immediately",level:3}];function c(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:'Trunk-based development is a version control management practice where developers merge small, frequent updates to a\ncore "trunk" or main branch. Since it streamlines merging and integration phases, it helps achieve CI/CD and increases\nsoftware delivery and organizational performance.'}),"\n",(0,a.jsx)(n.p,{children:"In the early days of software development, programmers didn't have the luxury of modern version control systems. Rather,\nthey developed two versions of their software concurrently as a means of tracking changes and reversing them if\nnecessary. Over time, this process proved to be labor-intensive, costly, and inefficient."}),"\n",(0,a.jsx)(n.p,{children:"As version control systems matured, various development styles emerged, enabling programmers to find bugs more easily,\ncode in parallel with their colleagues, and accelerate release cadence. Today, most programmers leverage one of two\ndevelopment models to deliver quality software"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Gitflow"}),"\n",(0,a.jsx)(n.li,{children:"trunk-based development"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Gitflow, which was popularized first, is a stricter development model where only certain individuals can approve changes\nto the main code. This maintains code quality and minimizes the number of bugs. Trunk-based development is a more open\nmodel since all developers have access to the main code. This enables teams to iterate quickly and implement\n",(0,a.jsx)(n.a,{href:"https://www.atlassian.com/continuous-delivery",children:"CI/CD"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"what-is-trunk-based-development",children:"What is Trunk-Based Development"}),"\n",(0,a.jsxs)(n.p,{children:["Trunk-based development is a\n",(0,a.jsx)(n.a,{href:"https://www.atlassian.com/git/tutorials/what-is-version-control",children:"version control management"}),' practice where developers\nmerge small, frequent updates to a  core "trunk" or main branch. It\'s a common practice among\n',(0,a.jsx)(n.a,{href:"https://www.atlassian.com/devops/what-is-devops",children:"DevOps"})," teams and part of the\n",(0,a.jsx)(n.a,{href:"https://www.atlassian.com/devops/what-is-devops/devops-best-practices",children:"DevOps lifecycle"})," since it streamlines merging\nand integration phases. In fact, trunk-based development is a required practice of CI/CD. Developers can create\nshort-lived branches with a few small commits compared to other long-lived feature branching strategies. As codebase\ncomplexity and team size grow, trunk-based development helps keep production releases flowing."]}),"\n",(0,a.jsx)(n.h2,{id:"gitflow-vs-trunk-based-development",children:"Gitflow vs. Trunk-Based Development"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow",children:"Gitflow"})," is an alternative Git branching\nmodel that uses long-lived feature branches and multiple primary branches. Gitflow has more, longer-lived branches and\nlarger commits than trunk-based development. Under this model, developers create a feature branch and delay merging it\nto the main trunk branch until the feature is complete. These long-lived feature branches require more collaboration to\nmerge as they have a higher risk of deviating from the trunk branch and introducing conflicting updates."]}),"\n",(0,a.jsx)(n.p,{children:"Gitflow also has separate primary branch lines for development, hotfixes, features, and releases. There are different\nstrategies for merging commits between these branches. Since there are more branches to juggle and manage, there is\noften more complexity that requires additional planning sessions and review from the team."}),"\n",(0,a.jsx)(n.p,{children:"Trunk-based development is far more simplified since it focuses on the main branch as the source of fixes and releases.\nIn trunk-based development the main branch is assumed to always be stable, without issues, and ready to deploy."}),"\n",(0,a.jsx)(n.h2,{id:"benefits-of-trunk-based-development",children:"Benefits of Trunk-Based Development"}),"\n",(0,a.jsxs)(n.p,{children:["Trunk-based development is a required practice for\n",(0,a.jsx)(n.a,{href:"https://www.atlassian.com/continuous-delivery/continuous-integration",children:"continuous integration"}),". If build and test\nprocesses are automated but developers work on isolated, lengthy feature branches that are infrequently integrated into\na shared branch, continuous integration is not living up to its potential."]}),"\n",(0,a.jsx)(n.p,{children:"Trunk-based development eases the friction of code integration. When developers finish new work, they must merge the new\ncode into the main branch. Yet they should not merge changes to the truck until they have verified that they can build\nsuccessfully. During this phase, conflicts may arise if modifications have been made since the new work began. In\nparticular, these conflicts are increasingly complex as development teams grow and the code base scales. This happens\nwhen developers create separate branches that deviate from the source branch and other developers are simultaneously\nmerging overlapping code. Luckily, the trunk-based development model reduces these conflicts."}),"\n",(0,a.jsx)(n.h3,{id:"allows-continuous-code-integration",children:"Allows Continuous Code Integration"}),"\n",(0,a.jsx)(n.p,{children:"In the trunk-based development model, there is a repository with a steady stream of commits flowing into the main\nbranch. Adding an automated test suite and code coverage monitoring for this stream of commits enables continuous\nintegration. When new code is merged into the trunk, automated integration and code coverage tests run to validate the\ncode quality."}),"\n",(0,a.jsx)(n.h3,{id:"ensures-continuous-code-review",children:"Ensures Continuous Code Review"}),"\n",(0,a.jsx)(n.p,{children:"The rapid, small commits of trunk-based development make code review a more efficient process. With small branches,\ndevelopers can quickly see and review small changes. This is far easier compared to a long-lived feature branch where a\nreviewer reads pages of code or manually inspects a large surface area of code changes."}),"\n",(0,a.jsx)(n.h3,{id:"enables-consecutive-production-code-releases",children:"Enables Consecutive Production Code Releases"}),"\n",(0,a.jsx)(n.p,{children:"Teams should make frequent, daily merges to the main branch. Trunk-based development strives to keep the trunk branch\n\"green\", meaning it's ready to deploy at any commit. Automated tests, code converge, and code reviews provides a\ntrunk-based development project with the assurances it's ready to deploy to production at any time. This gives team\nagility to frequently deploy to production and set further goals of daily production releases."}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"As CI/CD grew in popularity, branching models were refined and optimized, leading to the rise of trunk-based\ndevelopment. Now, trunk-based development is a requirement of continuous integration. With continuous integration,\ndevelopers perform trunk-based development in conjunction with automated tests that run after each committee to a\ntrunk. This ensures the project works at all times."})}),"\n",(0,a.jsx)(n.h2,{id:"trunk-based-development-best-practices",children:"Trunk-Based Development Best Practices"}),"\n",(0,a.jsx)(n.p,{children:"Trunk-based development ensures teams release code quickly and consistently. The following is a list of exercises and\npractices that will help refine your team's cadence and develop an optimized release schedule."}),"\n",(0,a.jsx)(n.h3,{id:"develop-in-small-batches",children:"Develop in Small Batches"}),"\n",(0,a.jsxs)(n.p,{children:["Trunk-based development follows a quick rhythm to deliver code to production. If trunk-based development was like music\nit would be a rapid staccato -- short, succinct notes in rapid succession, with the repository commits being the notes.\n",(0,a.jsx)(n.strong,{children:"Keeping commits and branches small"})," allows for a more rapid tempo of merges and deployments."]}),"\n",(0,a.jsx)(n.p,{children:"Small changes of a couple of commits or modification of a few lines of code minimize cognitive overhead. It's much\neasier for teams to have meaningful conversations and make quick decisions when reviewing a limited area of code versus\na sprawling set of changes."}),"\n",(0,a.jsx)(n.h3,{id:"feature-flags",children:"Feature Flags"}),"\n",(0,a.jsx)(n.p,{children:"Feature flags nicely compliment trunk-based development by enabling developers to wrap new changes in an inactive code\npath and activate it at a later time. This allows developers to forgo creating a separate repository feature branch and\ninstead commit new feature code directly to the main branch within a feature flag path."}),"\n",(0,a.jsx)(n.h3,{id:"implement-comprehensive-automated-testing",children:"Implement Comprehensive Automated Testing"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Automated testing is necessary for any modern software project intending to achieve CI/CD"}),". There are multiple types\nof automated tests that run at different stages of the release pipeline. Short running unit and integration tests are\nexecuted during development and upon code merge. Longer running, full stack, end-to-end tests are run in later pipeline\nphases against a full staging or production environment."]}),"\n",(0,a.jsx)(n.p,{children:"Automated tests help trunk-based development by maintaining a small batch rhythm as developers merge new commits. The\nautomated test suite reviews the code for any issues and automatically approves or denies it. This helps developers\nrapidly create commits and run them through automated tests to see if they introduce any new issues."}),"\n",(0,a.jsx)(n.h3,{id:"perform-asynchronous-code-reviews",children:"Perform Asynchronous Code Reviews"}),"\n",(0,a.jsx)(n.p,{children:"In trunk-based development, code review should be performed immediately and not put into an asynchronous system for\nlater review. Automated tests provide a layer of preemptive code review. When developers are ready to review a team\nmember's pull request, they can first check that the automated tests passed and the code coverage has increased. This\ngives the reviewer immediate reassurance that the new code meets certain specifications. The reviewer can then focus on\noptimizations."}),"\n",(0,a.jsx)(n.h3,{id:"have-three-or-fewer-active-branches-in-the-applications-code-repository",children:"Have Three or Fewer Active Branches in the Application's Code Repository"}),"\n",(0,a.jsxs)(n.p,{children:["Once a branch merges, it is best practice to delete it. ",(0,a.jsx)(n.strong,{children:"A repository with a large amount of active branches has some\nunfortunate side effects"}),". While it can be beneficial for teams to see what work is in progress by examining active\nbranches, this benefit is lost if there are stale and inactive branches still around. Some developers use Git user\ninterfaces that may become unwieldy to work with when loading a large number of remote branches."]}),"\n",(0,a.jsx)(n.h3,{id:"merge-branches-to-the-trunk-at-least-once-a-day",children:"Merge Branches to the Trunk at Least Once a Day"}),"\n",(0,a.jsx)(n.p,{children:"High-performing, trunk-based development teams should close out and merge any open and merge-ready branches at least on\na daily basis. This exercise helps keep rhythm and sets a cadence for release tracking. The team can then tag the main\ntrunk at the end of day as a release commit, which has the helpful side effect of generating a daily agile release\nincrement."}),"\n",(0,a.jsx)(n.h3,{id:"reduced-number-of-code-freezes-and-integration-phases",children:"Reduced Number of Code Freezes and Integration Phases"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Agile CI/CD teams shouldn't need planned code freezes or pauses for integration phases"}),' -- although an organization\nmay need them for other reasons. The "continuous" in CI/CD implies that updates are constantly flowing. Trunk-based\ndevelopment teams should try to avoid blocking code freezes and plan accordingly to ensure the release pipeline is not\nstalled.']}),"\n",(0,a.jsx)(n.h3,{id:"build-fast-and-execute-immediately",children:"Build Fast and Execute Immediately"}),"\n",(0,a.jsxs)(n.p,{children:["In order to maintain a quick release cadence, build and test execution times should be optimized. CI/CD build tools\nshould use caching layers where appropriate to avoid expensive computations for static. ",(0,a.jsx)(n.strong,{children:"Tests should be optimized to\nuse appropriate stubs for third-party services"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},5639:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var a=t(1733);const s={},i=a.createContext(s);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);