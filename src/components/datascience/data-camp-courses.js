//  eslint-disable-line
//datacampp parsng article
//document.querySelectorAll("article").forEach(a=>{
//   let c={};
//    c.title= a.querySelector("h4").innerText;
//   c.description= a.querySelector("p").innerText;
//   c.time= a.querySelectorAll(".dc-u-fs-small span")[2].innerText;
//   c.stream= a.querySelectorAll(".dc-u-fs-small span")[5].innerText;
//   c.technology= a.querySelectorAll("div")[0].classList[1].split("-")[3];
//  sc.push(c);
// });
const rCourses = [
  {
     "title":"Introduction to R",
     "description":"Master the basics of data analysis by manipulating common data structures such as vectors, matrices, and data frames.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"r"
  },
  {
     "title":"Intermediate R",
     "description":"Continue your journey to becoming an R ninja by learning about conditional statements, loops, and vector functions.",
     "time":"6 hours",
     "stream":"Programming",
     "technology":"r"
  },
  {
     "title":"Introduction to the Tidyverse",
     "description":"Get started on the path to exploring and visualizing your own data with the tidyverse, a powerful and popular collection of data science tools within R.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"r"
  },
  {
     "title":"Introduction to Data Visualization with ggplot2",
     "description":"Learn to produce meaningful and beautiful data visualizations with ggplot2 by understanding the grammar of graphics.",
     "time":"4 hours",
     "stream":"Data Visualization",
     "technology":"r"
  },
  {
     "title":"Data Manipulation with dplyr",
     "description":"Learn to transform and manipulate your data using dplyr.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"r"
  },
  {
     "title":"Introduction to Importing Data in R",
     "description":"In this course, you will learn to read CSV, XLS, and text files in R using tools like readxl and data.table.",
     "time":"3 hours",
     "stream":"Importing & Cleaning Data",
     "technology":"r"
  },
  {
     "title":"Introduction to Regression in R",
     "description":"Predict housing prices and ad click-through rate by implementing, analyzing, and interpreting regression analysis in R.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Intermediate Data Visualization with ggplot2",
     "description":"Learn to use facets, coordinate systems and statistics in ggplot2 to create meaningful explanatory plots.",
     "time":"4 hours",
     "stream":"Data Visualization",
     "technology":"r"
  },
  {
     "title":"Data Cleaning in R",
     "description":"Develop the skills you need to go from raw data to awesome insights as quickly and accurately as possible.",
     "time":"4 hours",
     "stream":"Importing & Cleaning Data",
     "technology":"r"
  },
  {
     "title":"Joining Data with dplyr",
     "description":"Learn to combine data across multiple tables to answer more complex questions with dplyr.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"r"
  },
  {
     "title":"Exploratory Data Analysis in R",
     "description":"Learn how to use graphical and numerical techniques to begin uncovering the structure of your data.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Introduction to Data in R",
     "description":"Learn the language of data, study types, sampling strategies, and experimental design.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Correlation and Regression in R",
     "description":"Learn how to describe relationships between two numerical quantities and characterize these relationships graphically.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Supervised Learning in R: Classification",
     "description":"In this course you will learn the basics of machine learning for classification.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"r"
  },
  {
     "title":"Introduction to Statistics in R",
     "description":"Grow your statistical skills and learn how to collect, analyze, and draw accurate conclusions from data.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Intermediate Importing Data in R",
     "description":"Parse data in any format. Whether it's flat files, statistical software, databases, or data right from the web.",
     "time":"3 hours",
     "stream":"Importing & Cleaning Data",
     "technology":"r"
  },
  {
     "title":"Multiple and Logistic Regression in R",
     "description":"In this course you'll learn to add multiple variables to linear models and to use logistic regression for classification.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Introduction to Writing Functions in R",
     "description":"Take your R skills up a notch by learning to write efficient, reusable functions.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"r"
  },
  {
     "title":"Case Study: Exploratory Data Analysis in R",
     "description":"Use data manipulation and visualization skills to explore the historical voting of the United Nations General Assembly.",
     "time":"4 hours",
     "stream":"Case Studies",
     "technology":"r"
  },
  {
     "title":"Introduction to R for Finance",
     "description":"Learn essential data structures such as lists and data frames and apply that knowledge directly to financial examples.",
     "time":"4 hours",
     "stream":"Applied Finance",
     "technology":"r"
  },
  {
     "title":"Working with Dates and Times in R",
     "description":"Learn the essentials of parsing, manipulating and computing with dates and times in R.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"r"
  },
  {
     "title":"Data Visualization in R",
     "description":"This course provides a comprehensive introduction to working with base graphics in R.",
     "time":"4 hours",
     "stream":"Data Visualization",
     "technology":"r"
  },
  {
     "title":"Writing Efficient R Code",
     "description":"Learn to write faster R code, discover benchmarking and profiling, and unlock the secrets of parallel programming.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"r"
  },
  {
     "title":"Supervised Learning in R: Regression",
     "description":"In this course you will learn how to predict future events using linear regression, generalized additive models, random forests, and xgboost.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"r"
  },
  {
     "title":"Building Web Applications with Shiny in R",
     "description":"Shiny is an R package that makes it easy to build interactive web apps directly in R, allowing your team to explore your data as dashboards or visualizations.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"r"
  },
  {
     "title":"Cluster Analysis in R",
     "description":"Develop a strong intuition for how hierarchical and k-means clustering work and learn how to apply them to extract insights from your data.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"r"
  },
  {
     "title":"Time Series Analysis in R",
     "description":"Learn the core techniques necessary to extract meaningful insights from time series data.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Unsupervised Learning in R",
     "description":"This course provides an intro to clustering and dimensionality reduction in R from a machine learning perspective.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"r"
  },
  {
     "title":"Forecasting in R",
     "description":"Learn how to make predictions about the future using time series forecasting in R.",
     "time":"5 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Communicating with Data in the Tidyverse",
     "description":"Leverage the power of tidyverse tools to create publication-quality graphics and custom-styled reports that communicate your results.",
     "time":"4 hours",
     "stream":"Data Visualization",
     "technology":"r"
  },
  {
     "title":"Machine Learning with caret in R",
     "description":"This course teaches the big ideas in machine learning like how to build and evaluate predictive models.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"r"
  },
  {
     "title":"Fundamentals of Bayesian Data Analysis in R",
     "description":"Learn what Bayesian data analysis is, how it works, and why it is a useful tool to have in your data science toolbox.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Working with Data in the Tidyverse",
     "description":"Learn to work with data using tools from the tidyverse, and master the important skills of taming and tidying your data.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"r"
  },
  {
     "title":"Data Manipulation with data.table in R",
     "description":"Master core concepts about data manipulation such as filtering, selecting and calculating groupwise statistics using data.table.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"r"
  },
  {
     "title":"String Manipulation with stringr in R",
     "description":"Learn how to pull character strings apart, put them back together and use the stringr package.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"r"
  },
  {
     "title":"Manipulating Time Series Data with xts and zoo in R",
     "description":"The xts and zoo packages make the task of managing and manipulating ordered observations fast and mistake free.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"r"
  },
  {
     "title":"Reporting with R Markdown",
     "description":"R Markdown is an easy-to-use formatting language for authoring dynamic reports from R code.",
     "time":"4 hours",
     "stream":"Reporting",
     "technology":"r"
  },
  {
     "title":"Intermediate R for Finance",
     "description":"Learn about how dates work in R, and explore the world of if statements, loops, and functions using financial examples.",
     "time":"5 hours",
     "stream":"Applied Finance",
     "technology":"r"
  },
  {
     "title":"Foundations of Inference",
     "description":"Learn how to draw conclusions about a population from a sample of data via a process known as statistical inference.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Foundations of Probability in R",
     "description":"In this course, you'll learn about the concepts of random variables, distributions, and conditioning.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Modeling with Data in the Tidyverse",
     "description":"Explore Linear Regression in a tidy framework.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Credit Risk Modeling in R",
     "description":"Apply statistical modeling in a real-life setting using logistic regression and decision trees to model credit risk.",
     "time":"4 hours",
     "stream":"Applied Finance",
     "technology":"r"
  },
  {
     "title":"Text Mining with Bag-of-Words in R",
     "description":"Learn the bag of words technique for text mining with R.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"r"
  },
  {
     "title":"Joining Data with data.table in R",
     "description":"This course will show you how to combine and merge datasets with data.table.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"r"
  },
  {
     "title":"Visualizing Geospatial Data in R",
     "description":"Learn to read, explore, and manipulate spatial data then use your skills to create informative maps using R.",
     "time":"4 hours",
     "stream":"Data Visualization",
     "technology":"r"
  },
  {
     "title":"Working with Web Data in R",
     "description":"Learn how to efficiently import data from the web into R.",
     "time":"4 hours",
     "stream":"Importing & Cleaning Data",
     "technology":"r"
  },
  {
     "title":"Introduction to Portfolio Analysis in R",
     "description":"Apply your finance and R skills to backtest, analyze, and optimize financial portfolios.",
     "time":"5 hours",
     "stream":"Applied Finance",
     "technology":"r"
  },
  {
     "title":"Building Dashboards with shinydashboard",
     "description":"In this course you'll learn to build dashboards using the shinydashboard package.",
     "time":"4 hours",
     "stream":"Reporting",
     "technology":"r"
  },
  {
     "title":"Categorical Data in the Tidyverse",
     "description":"Get ready to categorize! In this course, you will work with non-numerical data, such as job titles or survey responses, using the Tidyverse landscape.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"r"
  },
  {
     "title":"Introduction to Statistical Modeling in R",
     "description":"This course is designed to get you up to speed with the most important and powerful methodologies in statistics.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Parallel Programming in R",
     "description":"This course covers in detail the tools available in R for parallel computing.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"r"
  },
  {
     "title":"Experimental Design in R",
     "description":"In this course you'll learn about basic experimental design, a crucial part of any data analysis.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Hierarchical and Mixed Effects Models in R",
     "description":"In this course you will learn to fit hierarchical models with random effects.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Tree-Based Models in R",
     "description":"In this course, you'll learn how to use tree-based models and ensembles for regression and classification.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"r"
  },
  {
     "title":"A/B Testing in R",
     "description":"Learn A/B testing: including hypothesis testing, experimental design, and confounding variables.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Introduction to Text Analysis in R",
     "description":"Analyze text data in R using the tidy framework.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"r"
  },
  {
     "title":"ARIMA Models in R",
     "description":"Become an expert in fitting ARIMA (autoregressive integrated moving average) models to time series data using R.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Linear Algebra for Data Science in R",
     "description":"This course is an introduction to linear algebra, one of the most important mathematical topics underpinning data science.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Case Studies: Building Web Applications with Shiny in R",
     "description":"Practice your Shiny skills while building some fun Shiny apps for real-life scenarios!",
     "time":"4 hours",
     "stream":"Reporting",
     "technology":"r"
  },
  {
     "title":"Generalized Linear Models in R",
     "description":"The Generalized Linear Model course expands your regression toolbox to include logistic and Poisson regression.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Financial Trading in R",
     "description":"This course covers the basics of financial trading and how to use quantstrat to build signal-based trading strategies.",
     "time":"5 hours",
     "stream":"Applied Finance",
     "technology":"r"
  },
  {
     "title":"Importing and Managing Financial Data in R",
     "description":"Learn how to access financial data from local files as well as from internet sources.",
     "time":"5 hours",
     "stream":"Applied Finance",
     "technology":"r"
  },
  {
     "title":"Survival Analysis in R",
     "description":"Learn to work with time-to-event data. The event may be death or finding a job after unemployment. Learn to estimate, visualize, and interpret survival models!",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Interactive Maps with leaflet in R",
     "description":"Learn how to produce interactive web maps with ease using leaflet.",
     "time":"4 hours",
     "stream":"Data Visualization",
     "technology":"r"
  },
  {
     "title":"Network Analysis in R",
     "description":"In this course you'll learn to analyze and visualize network data with the igraph package.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Machine Learning in the Tidyverse",
     "description":"Leverage the tools in the tidyverse to generate, explore and evaluate machine learning models.",
     "time":"5 hours",
     "stream":"Machine Learning",
     "technology":"r"
  },
  {
     "title":"Dealing With Missing Data in R",
     "description":"Make it easy to visualise, explore, and impute missing data with naniar, a tidyverse friendly approach to missing data.",
     "time":"4 hours",
     "stream":"Importing & Cleaning Data",
     "technology":"r"
  },
  {
     "title":"RNA-Seq with Bioconductor in R",
     "description":"Use RNA-Seq differential expression analysis to identify genes likely to be important for different diseases or conditions.",
     "time":"4 hours",
     "stream":"Other",
     "technology":"r"
  },
  {
     "title":"Quantitative Risk Management in R",
     "description":"Work with risk-factor return series, study their empirical properties, and make estimates of value-at-risk.",
     "time":"5 hours",
     "stream":"Applied Finance",
     "technology":"r"
  },
  {
     "title":"Introduction to Bioconductor in R",
     "description":"Learn to use essential bioconductor packages using datasets from virus, fungus, human and plants!",
     "time":"4 hours",
     "stream":"Other",
     "technology":"r"
  },
  {
     "title":"Bayesian Modeling with RJAGS",
     "description":"In this course, you'll learn how to implement more advanced Bayesian models using RJAGS.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Introduction to Spark with sparklyr in R",
     "description":"Learn how to analyze huge datasets using Apache Spark and R using the sparklyr package.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"r"
  },
  {
     "title":"Choice Modeling for Marketing in R",
     "description":"Learn to analyze and model customer choice data in R.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Building Dashboards with flexdashboard",
     "description":"In this course you'll learn how to create static and interactive dashboards using flexdashboard and shiny.",
     "time":"4 hours",
     "stream":"Reporting",
     "technology":"r"
  },
  {
     "title":"Spatial Analysis with sf and raster in R",
     "description":"Analyze spatial data using the sf and raster packages.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Intermediate Portfolio Analysis in R",
     "description":"Advance you R finance skills to backtest, analyze, and optimize financial portfolios.",
     "time":"5 hours",
     "stream":"Applied Finance",
     "technology":"r"
  },
  {
     "title":"Analyzing Social Media Data in R",
     "description":"Extract and visualize Twitter data, perform sentiment and network analysis, and map the geolocation of your tweets.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"r"
  },
  {
     "title":"Inference for Categorical Data in R",
     "description":"In this course you'll learn how to leverage statistical techniques for working with categorical data.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Bond Valuation and Analysis in R",
     "description":"Learn to use R to develop models to evaluate and analyze bonds as well as protect them from interest rate changes.",
     "time":"4 hours",
     "stream":"Applied Finance",
     "technology":"r"
  },
  {
     "title":"Inference for Linear Regression in R",
     "description":"In this course you'll learn how to perform inference using linear models.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Visualizing Time Series Data in R",
     "description":"Learn how to visualize time series in R, then practice with a stock-picking case study.",
     "time":"4 hours",
     "stream":"Data Visualization",
     "technology":"r"
  },
  {
     "title":"Dimensionality Reduction in R",
     "description":"Develop your intuition for when to reduce dimensionality in your data, and master the fundamentals of how to do so in R.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"r"
  },
  {
     "title":"Spatial Statistics in R",
     "description":"Learn how to make sense of spatial data and deal with various classes of statistical problems associated with it.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Visualization Best Practices in R",
     "description":"Learn to effectively convey your data with an overview of common charts, alternative visualization types, and perception-driven style enhancements.",
     "time":"4 hours",
     "stream":"Data Visualization",
     "technology":"r"
  },
  {
     "title":"Topic Modeling in R",
     "description":"Learn how to fit topic models using the Latent Dirichlet Allocation algorithm.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"r"
  },
  {
     "title":"Analyzing Survey Data in R",
     "description":"Learn survey design using common design structures followed by visualizing and analyzing survey results.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Factor Analysis in R",
     "description":"Explore latent variables, such as personality using exploratory and confirmatory factor analyses.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Advanced Dimensionality Reduction in R",
     "description":"Learn how to apply advanced dimensionality techniques such as t-SNE and GLRM.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"r"
  },
  {
     "title":"Foundations of Functional Programming with purrr",
     "description":"Learn to easily summarize and manipulate lists using the purrr package.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"r"
  },
  {
     "title":"Developing R Packages",
     "description":"Create and share your own R Packages!",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"r"
  },
  {
     "title":"Structural Equation Modeling with lavaan in R",
     "description":"Learn how to create and assess measurement models used to confirm the structure of a scale or questionnaire.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Interactive Data Visualization with plotly in R",
     "description":"Learn to create interactive graphics entirely in R with plotly.",
     "time":"4 hours",
     "stream":"Data Visualization",
     "technology":"r"
  },
  {
     "title":"Support Vector Machines in R",
     "description":"This course will introduce the support vector machine (SVM) using an intuitive, visual approach.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"r"
  },
  {
     "title":"Bayesian Regression Modeling with rstanarm",
     "description":"Learn how to leverage Bayesian estimation methods to make better inferences about linear regression models.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Sentiment Analysis in R",
     "description":"Learn sentiment analysis by identifying positive and negative language, specific emotional intent and making compelling visualizations.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"r"
  },
  {
     "title":"Introduction to Natural Language Processing in R",
     "description":"Gain an overview of all the skills and tools needed to excel in Natural Language Processing in R.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"r"
  },
  {
     "title":"Case Studies: Manipulating Time Series Data in R",
     "description":"Strengthen your knowledge of the topics covered in Manipulating Time Series in R using real case study data.",
     "time":"4 hours",
     "stream":"Case Studies",
     "technology":"r"
  },
  {
     "title":"Machine Learning for Marketing Analytics in R",
     "description":"In this course you'll learn how to use data science for several common marketing tasks.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"r"
  },
  {
     "title":"Anomaly Detection in R",
     "description":"Learn statistical tests for identifying outliers and how to use sophisticated anomaly scoring algorithms.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"r"
  },
  {
     "title":"Single-Cell RNA-Seq with Bioconductor in R",
     "description":"Analyze single-cell RNA-Seq data using normalization, dimensionality reduction, clustering and differential expression.",
     "time":"4 hours",
     "stream":"Other",
     "technology":"r"
  },
  {
     "title":"Text Mining America's Toughest Game Show",
     "description":"Use text mining to analyze Jeopardy! data. \n\n        ",
     "time":"45 minutes",
     "stream":"Case Studies",
     "technology":"r"
  },
  {
     "title":"Wrangling and Visualizing Musical Data",
     "description":"Wrangle and visualize musical data to find common chords and compare the styles of different artists.\n\n        ",
     "time":"45 minutes",
     "stream":"Case Studies",
     "technology":"r"
  },
  {
     "title":"Importing and Cleaning Data",
     "description":"Apply your importing and data cleaning skills to real-world soccer data.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Importing & Cleaning Data...",
     "technology":"r"
  },
  {
     "title":"Exploring the Kaggle Data Science Survey",
     "description":"Discover the top tools Kaggle participants use for data science and machine learning. \n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Modeling the Volatility of US Bond Yields",
     "description":"Discover how the US bond yields behave using descriptive statistics and advanced modeling.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Visualization, Applied Finance",
     "technology":"r"
  },
  {
     "title":"What Makes a Pokémon Legendary?",
     "description":"Use tree-based machine learning methods to identify the characteristics of legendary Pokémon.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Kidney Stones and Simpson's Paradox",
     "description":"Use logistic regression to determine which treatment procedure is more effective for kidney stone removal.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Visualization, Probability & Statistics...",
     "technology":"r"
  },
  {
     "title":"TV, Halftime Shows, and the Big Game",
     "description":"Load, clean, and explore Super Bowl data in the age of soaring ad costs and flashy halftime shows.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Bad passwords and the NIST guidelines",
     "description":"Check what passwords fail to conform to the National Institute of Standards and Technology password guidelines.\n\n        ",
     "time":"45 minutes",
     "stream":"Case Studies",
     "technology":"r"
  },
  {
     "title":"Health Survey Data Analysis of BMI",
     "description":"Analyze health survey data to determine how BMI is associated with physical activity and smoking.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Probability & Statistics...",
     "technology":"r"
  },
  {
     "title":"Trends in Maryland Crime Rates",
     "description":"Apply hierarchical and mixed-effect models to analyze Maryland crime rates.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Are You Ready for the Zombie Apocalypse?",
     "description":"Use your logistic regression skills to protect people from becoming zombies! \n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"The Impact of Climate Change on Birds",
     "description":"\nPredict the impact of climate change on bird distributions using spatial data and machine learning.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Clustering Bustabit Gambling Behavior",
     "description":"Use cluster analysis to glean insights into cryptocurrency gambling behavior.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Planning Public Policy in Argentina",
     "description":"Apply unsupervised learning techniques to help plan an education program in Argentina.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Phyllotaxis: Draw Flowers Using Mathematics",
     "description":"Use R to make art and create imaginary flowers inspired by nature.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Visualization, Case Studies",
     "technology":"r"
  },
  {
     "title":"Data Science for Social Good: Crime Study",
     "description":"Use data science to catch criminals, plus find new ways to volunteer personal time for social good.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Degrees That Pay You Back",
     "description":"Explore the salary potential of college majors with a k-means cluster analysis.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Gender Bias in Graduate Admissions",
     "description":"Analyze admissions data from UC Berkeley and find out if the university was biased against women.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Going Down to South Park: A Text Analysis",
     "description":"Analyze the dialog and IMDB ratings of 287 South Park episodes. Warning: contains explicit language.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Clustering Heart Disease Patient Data",
     "description":"Experiment with clustering algorithms to help doctors inform treatment for heart disease patients.\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Where Are the Fishes?",
     "description":"Explore acoustic backscatter data to find fish in the U.S. Atlantic Ocean. \n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Functions for Food Price Forecasts",
     "description":"Write functions to forecast time series of food prices in Rwanda.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"A Text Analysis of Trump's Tweets",
     "description":"Apply text mining to Donald Trump's tweets to confirm if he writes the (angrier) Android half. \n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Predict Taxi Fares with Random Forests",
     "description":"Use regression trees and random forests to find places where New York taxi drivers earn the most. \n\n        ",
     "time":"45 minutes",
     "stream":"Data Visualization, Machine Learning...",
     "technology":"r"
  },
  {
     "title":"Dr. Semmelweis and the Discovery of Handwashing",
     "description":"Reanalyse the data behind one of the most important discoveries of modern medicine: handwashing.\n\n        ",
     "time":"60 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Drunken Datetimes in Ames, Iowa",
     "description":"Apply your skills from \"Working with Dates and Times in R\" to breathalyzer data from Ames, Iowa. \n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Where Would You Open a Chipotle?",
     "description":"Create and explore interactive maps using Leaflet to determine where to open the next Chipotle.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Reducing Traffic Mortality in the USA",
     "description":"How can we find a good strategy for reducing traffic-related deaths?\n\n        ",
     "time":"60 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Explore 538's Halloween Candy Rankings",
     "description":"Get ready for Halloween by digging into a FiveThirtyEight dataset with all your favorite candy! \n\n        ",
     "time":"60 minutes",
     "stream":"Data Visualization, Probability & Statistics...",
     "technology":"r"
  },
  {
     "title":"What Your Heart Rate Is Telling You",
     "description":"Examine the relationship between heart rate and heart disease using multiple logistic regression.\n\n        ",
     "time":"60 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Partnering to Protect You from Peril",
     "description":"Examine the network of connections among local health departments in the United States.\n\n        ",
     "time":"60 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Rise and Fall of Programming Languages",
     "description":"Analyze the relative popularity of programming languages over time based on Stack Overflow data.\n\n        ",
     "time":"60 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Introduction to DataCamp Projects",
     "description":"If you have never done a DataCamp project, this is the place to start!  \n\n        ",
     "time":"30 minutes",
     "stream":"Data Visualization, Case Studies",
     "technology":"r"
  },
  {
     "title":"A Visual History of Nobel Prize Winners",
     "description":"Explore a dataset from Kaggle containing a century's worth of Nobel Laureates. Who won? Who got snubbed?\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Who Is Drunk and When in Ames, Iowa?",
     "description":"Flex your tidyverse muscles on breath alcohol test data from Ames, Iowa, USA.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Classify Suspected Infection in Patients",
     "description":"Classify patients with suspected infections using data.table and electronic health records.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Importing & Cleaning Data",
     "technology":"r"
  },
  {
     "title":"Scout your Athletics Fantasy Team",
     "description":"Analyze athletics data to find new ways to scout and assess jumpers and throwers.\n\n        ",
     "time":"45 minutes",
     "stream":"Case Studies",
     "technology":"r"
  },
  {
     "title":"Visualizing Inequalities in Life Expectancy",
     "description":"Compare life expectancy across countries and genders with ggplot2.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  },
  {
     "title":"Level Difficulty in Candy Crush Saga",
     "description":"Analyze data from the hit mobile game, Candy Crush Saga. \n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"r"
  }
];
const pCourses= [
  {
     "title":"Introduction to Python",
     "description":"Master the basics of data analysis in Python. Expand your skillset by learning scientific computing with numpy.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"python"
  },
  {
     "title":"Intermediate Python",
     "description":"Level up your data science skills by creating visualizations using Matplotlib and manipulating DataFrames with pandas.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"python"
  },
  {
     "title":"Introduction to Data Science in Python",
     "description":"Dive into data science using Python and learn how to effectively analyze and visualize your data.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"python"
  },
  {
     "title":"Data Manipulation with pandas",
     "description":"Use the world’s most popular Python data science package to manipulate data and calculate summary statistics.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"python"
  },
  {
     "title":"Supervised Learning with scikit-learn",
     "description":"Learn how to build and tune predictive models and evaluate how well they'll perform on unseen data.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Python Data Science Toolbox (Part 1)",
     "description":"Learn the art of writing your own functions in Python, as well as key concepts like scoping and error handling.",
     "time":"3 hours",
     "stream":"Programming",
     "technology":"python"
  },
  {
     "title":"Python Data Science Toolbox (Part 2)",
     "description":"Continue to build your modern Data Science skills by learning about iterators and list comprehensions.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"python"
  },
  {
     "title":"Merging DataFrames with pandas",
     "description":"This course is all about the act of combining, or merging, DataFrames, an essential part your Data Scientist's toolbox.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"python"
  },
  {
     "title":"Introduction to Importing Data in Python",
     "description":"Learn to import data into Python from various sources, such as Excel, SQL, SAS and right from the web.",
     "time":"3 hours",
     "stream":"Importing & Cleaning Data",
     "technology":"python"
  },
  {
     "title":"Introduction to Data Visualization with Matplotlib",
     "description":"Learn how to create, customize, and share data visualizations using Matplotlib.",
     "time":"4 hours",
     "stream":"Data Visualization",
     "technology":"python"
  },
  {
     "title":"Statistical Thinking in Python (Part 1)",
     "description":"Build the foundation you need to think statistically and to speak the language of your data.",
     "time":"3 hours",
     "stream":"Probability & Statistics",
     "technology":"python"
  },
  {
     "title":"Introduction to Data Engineering",
     "description":"Learn about the world of data engineering with an overview of all its relevant topics and tools!",
     "time":"4 hours",
     "stream":"Data Engineering",
     "technology":"python"
  },
  {
     "title":"Data Cleaning in Python",
     "description":"Learn to diagnose and treat dirty data and develop the skills needed to transform your raw data into accurate insights!",
     "time":"4 hours",
     "stream":"Importing & Cleaning Data",
     "technology":"python"
  },
  {
     "title":"Introduction to Deep Learning in Python",
     "description":"Learn the fundamentals of neural networks and how to build deep learning models using Keras 2.0.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Introduction to Data Visualization in Python",
     "description":"Learn complex data visualization techniques using Matplotlib and seaborn.",
     "time":"4 hours",
     "stream":"Data Visualization",
     "technology":"python"
  },
  {
     "title":"Introduction to Data Visualization with Seaborn",
     "description":"Learn how to create informative and attractive visualizations in Python using the Seaborn library.",
     "time":"4 hours",
     "stream":"Data Visualization",
     "technology":"python"
  },
  {
     "title":"Intermediate Importing Data in Python",
     "description":"Improve your Python data importing skills and learn to work with web and API data.",
     "time":"2 hours",
     "stream":"Importing & Cleaning Data",
     "technology":"python"
  },
  {
     "title":"Exploratory Data Analysis in Python",
     "description":"Learn how to explore, visualize, and extract insights from data.",
     "time":"4 hours",
     "stream":"Case Studies",
     "technology":"python"
  },
  {
     "title":"Unsupervised Learning in Python",
     "description":"Learn how to cluster, transform, visualize, and extract insights from unlabeled datasets using scikit-learn and scipy.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"pandas Foundations",
     "description":"Learn how to use the industry-standard pandas library to import, build, and manipulate DataFrames.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"python"
  },
  {
     "title":"Introduction to PySpark",
     "description":"Learn to implement distributed data management and machine learning in Spark using the PySpark package.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"python"
  },
  {
     "title":"Statistical Thinking in Python (Part 2)",
     "description":"Learn to perform the two key tasks in statistical inference: parameter estimation and hypothesis testing.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"python"
  },
  {
     "title":"Introduction to Natural Language Processing in Python",
     "description":"Learn fundamental natural language processing techniques using Python and how to apply them to extract insights from real-world text data.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Machine Learning with Tree-Based Models in Python",
     "description":"In this course, you'll learn how to use tree-based models and ensembles for regression and classification using scikit-learn.",
     "time":"5 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Writing Functions in Python",
     "description":"Learn to use best practices to write maintainable, reusable, complex functions with good documentation.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"python"
  },
  {
     "title":"Object-Oriented Programming in Python",
     "description":"Dive in and learn how to create classes and leverage inheritance and polymorphism to reuse and optimize code.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"python"
  },
  {
     "title":"Working with Dates and Times in Python",
     "description":"Learn how to work with dates and times in Python.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"python"
  },
  {
     "title":"Web Scraping in Python",
     "description":"Learn to retrieve and parse information from the internet using the Python library scrapy.",
     "time":"4 hours",
     "stream":"Importing & Cleaning Data",
     "technology":"python"
  },
  {
     "title":"Intermediate Data Visualization with Seaborn",
     "description":"Use Seaborn's sophisticated visualization tools to make beautiful, informative visualizations with ease.",
     "time":"4 hours",
     "stream":"Data Visualization",
     "technology":"python"
  },
  {
     "title":"Writing Efficient Python Code",
     "description":"Learn to write efficient code that executes quickly and allocates resources skillfully to avoid unnecessary overhead.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"python"
  },
  {
     "title":"Cluster Analysis in Python",
     "description":"In this course, you will be introduced to unsupervised learning through techniques such as hierarchical and k-means clustering using the SciPy library.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Analyzing Police Activity with pandas",
     "description":"Explore the Stanford Open Policing Project dataset and analyze the impact of gender on police behavior using pandas.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"python"
  },
  {
     "title":"Introduction to Databases in Python",
     "description":"In this course, you'll learn the basics of relational databases and how to interact with them.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"python"
  },
  {
     "title":"Data Types for Data Science in Python",
     "description":"Consolidate and extend your knowledge of Python data types such as lists, dictionaries, and tuples, leveraging them to solve Data Science problems.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"python"
  },
  {
     "title":"Streamlined Data Ingestion with pandas",
     "description":"Learn to acquire data from common file formats and systems such as CSV files, spreadsheets, JSON, SQL databases, and APIs.",
     "time":"4 hours",
     "stream":"Importing & Cleaning Data",
     "technology":"python"
  },
  {
     "title":"Introduction to Python for Finance",
     "description":"This course introduces Python for financial analysis.",
     "time":"4 hours",
     "stream":"Applied Finance",
     "technology":"python"
  },
  {
     "title":"Case Study: School Budgeting with Machine Learning in Python",
     "description":"Learn how to build a model to automatically classify items in a school budget.",
     "time":"4 hours",
     "stream":"Case Studies",
     "technology":"python"
  },
  {
     "title":"Manipulating DataFrames with pandas",
     "description":"You will learn how to tidy, rearrange, and restructure your data using versatile pandas DataFrames.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"python"
  },
  {
     "title":"Image Processing in Python",
     "description":"Learn to process, transform, and manipulate images at your will.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Intermediate Python for Finance",
     "description":"Build on top of your Python skills for Finance, by learning how to use datetime, if-statements, DataFrames, and more.",
     "time":"4 hours",
     "stream":"Applied Finance",
     "technology":"python"
  },
  {
     "title":"Manipulating Time Series Data in Python",
     "description":"In this course you'll learn the basics of working with time series data.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"python"
  },
  {
     "title":"Introduction to TensorFlow in Python",
     "description":"Learn the fundamentals of neural networks and how to build deep learning models using TensorFlow.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Linear Classifiers in Python",
     "description":"In this course you will learn the details of linear classifiers like logistic regression and SVM.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Preprocessing for Machine Learning in Python",
     "description":"In this course you'll learn how to get your cleaned data ready for modeling.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Software Engineering for Data Scientists in Python",
     "description":"Learn all about modularity, documentation, & automated testing to help you solve Data Science problems quicker and more reliably.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"python"
  },
  {
     "title":"Extreme Gradient Boosting with XGBoost",
     "description":"Learn the fundamentals of gradient boosting and build state-of-the-art machine learning models using XGBoost to solve classification and regression problems.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Machine Learning for Time Series Data in Python",
     "description":"This course focuses on feature engineering and machine learning for time series data.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Introduction to Deep Learning with Keras",
     "description":"Learn to start developing deep learning models with Keras.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Time Series Analysis in Python",
     "description":"In this course you'll learn the basics of analyzing time series data.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"python"
  },
  {
     "title":"Feature Engineering for Machine Learning in Python",
     "description":"Create new features to improve the performance of your Machine Learning models.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Building Chatbots in Python",
     "description":"Learn the fundamentals of how to build conversational bots using rule-based systems as well as machine learning.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Regular Expressions in Python",
     "description":"Learn about string manipulation and become a master at using regular expressions.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"python"
  },
  {
     "title":"Interactive Data Visualization with Bokeh",
     "description":"Learn how to create versatile and interactive data visualizations using Bokeh.",
     "time":"4 hours",
     "stream":"Data Visualization",
     "technology":"python"
  },
  {
     "title":"Big Data Fundamentals with PySpark",
     "description":"Learn the fundamentals of working with big data with PySpark.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"python"
  },
  {
     "title":"Image Processing with Keras in Python",
     "description":"Learn powerful techniques for image analysis in Python using deep learning and convolutional neural networks in Keras.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Market Basket Analysis in Python",
     "description":"Explore association rules in market basket analysis with Python by bookstore data and creating movie recommendations.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Advanced Deep Learning with Keras",
     "description":"Build multiple-input and multiple-output deep learning models using Keras.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Dimensionality Reduction in Python",
     "description":"Learn to reduce dimensionality in Python.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Introduction to Network Analysis in Python",
     "description":"This course will equip you with the skills to analyze, visualize, and make sense of networks using the NetworkX library.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"python"
  },
  {
     "title":"Feature Engineering for NLP in Python",
     "description":"Learn techniques to extract useful information from text and process them into a format suitable for machine learning.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Introduction to Deep Learning with PyTorch",
     "description":"Learn to create deep learning models with the PyTorch library.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Importing and Managing Financial Data in Python",
     "description":"In this course, you'll learn how to import and manage financial data in Python using various tools and sources.",
     "time":"5 hours",
     "stream":"Applied Finance",
     "technology":"python"
  },
  {
     "title":"Introduction to Airflow in Python",
     "description":"Learn how to to implement and schedule data engineering workflows.",
     "time":"4 hours",
     "stream":"Data Engineering",
     "technology":"python"
  },
  {
     "title":"Building Data Engineering Pipelines in Python",
     "description":"Learn how to build data engineering pipelines in Python.",
     "time":"4 hours",
     "stream":"Data Engineering",
     "technology":"python"
  },
  {
     "title":"Unit Testing for Data Science in Python",
     "description":"Learn how to write unit tests for your Data Science projects in Python using pytest.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"python"
  },
  {
     "title":"Marketing Analytics: Predicting Customer Churn in Python",
     "description":"Learn how to use Python to analyze customer churn and build a model to predict it.",
     "time":"4 hours",
     "stream":"Case Studies",
     "technology":"python"
  },
  {
     "title":"Machine Learning with PySpark",
     "description":"Learn how to make predictions with Apache Spark.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Hyperparameter Tuning in Python",
     "description":"Learn to tune hyperparameters in Python.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Model Validation in Python",
     "description":"Learn the basics of model validation, validation techniques, and begin creating validated and high performing models.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Machine Learning for Finance in Python",
     "description":"Learn to model and predict stock data values using linear models, decision trees, random forests, and neural networks.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Working with the Class System in Python",
     "description":"Learn the fundamentals of object-oriented programming: classes, objects, methods, inheritance, polymorphism, and others!",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"python"
  },
  {
     "title":"Dealing with Missing Data in Python",
     "description":"Learn how to identify, analyze, remove and impute missing data in Python.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"python"
  },
  {
     "title":"Winning a Kaggle Competition in Python",
     "description":"Learn how to approach and win competitions on Kaggle.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Customer Analytics and A/B Testing in Python",
     "description":"Learn how to use Python to create, run, and analyze A/B tests to make proactive business decisions.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"python"
  },
  {
     "title":"Introduction to Linear Modeling in Python",
     "description":"Explore the concepts and applications of linear models with python and build models to describe, predict, and extract insight from data patterns.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"python"
  },
  {
     "title":"Introduction to Portfolio Risk Management in Python",
     "description":"Evaluate portfolio risk and returns, construct market-cap weighted equity portfolios and learn how to forecast and hedge market risk via scenario generation.",
     "time":"4 hours",
     "stream":"Applied Finance",
     "technology":"python"
  },
  {
     "title":"Introduction to Financial Concepts in Python",
     "description":"Using Python and NumPy, learn the most fundamental financial concepts.",
     "time":"4 hours",
     "stream":"Applied Finance",
     "technology":"python"
  },
  {
     "title":"AI Fundamentals",
     "description":"Learn the fundamentals of AI. No programming experience required!",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Cleaning Data with PySpark",
     "description":"Learn how to clean data with Apache Spark in Python.",
     "time":"4 hours",
     "stream":"Importing & Cleaning Data",
     "technology":"python"
  },
  {
     "title":"Advanced NLP with spaCy",
     "description":"Learn how to use spaCy to build advanced natural language understanding systems, using both rule-based and machine learning approaches.",
     "time":"5 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Parallel Programming with Dask in Python",
     "description":"Learn how to take the Python workflows you currently have and easily scale them up to large datasets without the need for distributed computing environments.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"python"
  },
  {
     "title":"Credit Risk Modeling in Python",
     "description":"Learn how to prepare credit application data, apply machine learning and business rules to reduce risk and ensure profitability.",
     "time":"4 hours",
     "stream":"Applied Finance",
     "technology":"python"
  },
  {
     "title":"Practicing Coding Interview Questions in Python",
     "description":"Prepare for your next coding interviews in Python.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"python"
  },
  {
     "title":"Sentiment Analysis in Python",
     "description":"Are customers thrilled with your products or is your service lacking? Learn how to perform an end-to-end sentiment analysis task.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Customer Segmentation in Python",
     "description":"Learn how to segment customers in Python.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"ARIMA Models in Python",
     "description":"Learn about ARIMA models in Python and become an expert in time series analysis.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Biomedical Image Analysis in Python",
     "description":"Learn the fundamentals of exploring, manipulating, and measuring biomedical image data.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"python"
  },
  {
     "title":"Statistical Simulation in Python",
     "description":"Learn to solve increasingly complex problems using simulations to generate and analyze data.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"python"
  },
  {
     "title":"Introduction to AWS Boto in Python",
     "description":"Learn about AWS Boto and harnessing cloud technology to optimize your data workflow.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"python"
  },
  {
     "title":"Introduction to MongoDB in Python",
     "description":"Learn to manipulate and analyze flexibly structured data with MongoDB.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"python"
  },
  {
     "title":"Introduction to Spark SQL in Python",
     "description":"Learn how to manipulate data and create machine learning feature sets in Spark using SQL in Python.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"python"
  },
  {
     "title":"Recurrent Neural Networks for Language Modeling in Python",
     "description":"Use RNNs to classify text sentiment, generate sentences, and translate text between languages.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Introduction to Predictive Analytics in Python",
     "description":"In this course you'll learn to use and present logistic regression models for making predictions.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Introduction to Portfolio Analysis in Python",
     "description":"Learn how to calculate meaningful measures of risk and performance, and how to compile an optimal portfolio for the desired risk and return trade-off.",
     "time":"4 hours",
     "stream":"Applied Finance",
     "technology":"python"
  },
  {
     "title":"Visualizing Time Series Data in Python",
     "description":"Visualize seasonality, trends and other patterns in your time series data.",
     "time":"4 hours",
     "stream":"Data Visualization",
     "technology":"python"
  },
  {
     "title":"Quantitative Risk Management in Python",
     "description":"Learn about risk management, value at risk and more applied to the 2008 financial crisis using Python.",
     "time":"4 hours",
     "stream":"Applied Finance",
     "technology":"python"
  },
  {
     "title":"Writing Efficient Code with pandas",
     "description":"Learn efficient techniques in pandas to optimize your Python code.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"python"
  },
  {
     "title":"Visualizing Geospatial Data in Python",
     "description":"Learn how to make attractive visualizations of geospatial data in Python using the geopandas package and folium maps.",
     "time":"4 hours",
     "stream":"Data Visualization",
     "technology":"python"
  },
  {
     "title":"Supply Chain Analytics in Python",
     "description":"Leverage the power of Python and PuLP to optimize supply chains.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"python"
  },
  {
     "title":"Case Studies in Statistical Thinking",
     "description":"Take vital steps towards mastery as you apply your statistical thinking skills to real-world data sets and extract actionable insights from them.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"python"
  },
  {
     "title":"Name Game: Gender Prediction using Sound",
     "description":"Analyze the gender distribution of children's book writers and use sound to match names to gender.\n\n        ",
     "time":"45 minutes",
     "stream":"Case Studies",
     "technology":"python"
  },
  {
     "title":"Exploring the Bitcoin Cryptocurrency Market",
     "description":"You will explore the market capitalization of Bitcoin and other cryptocurrencies.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"Real-time Insights from Social Media Data",
     "description":"Learn to analyze Twitter data and do a deep dive into a hot trend.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"A Network Analysis of Game of Thrones",
     "description":"Analyze the network of characters in Game of Thrones and how it changes over the course of the books.\n\n        ",
     "time":"45 minutes",
     "stream":"Case Studies",
     "technology":"python"
  },
  {
     "title":"Disney Movies and Box Office Success",
     "description":"Explore Disney movie data, then build a linear regression model to predict box office success.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"Analyze Your Runkeeper Fitness Data",
     "description":"Import, clean, and analyze seven years worth of training data tracked on the Runkeeper app.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"Comparing Cosmetics by Ingredients",
     "description":"Process ingredient lists for cosmetics on Sephora then visualize similarity using t-SNE and Bokeh.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"TV, Halftime Shows, and the Big Game",
     "description":"Load, clean, and explore Super Bowl data in the age of soaring ad costs and flashy halftime shows.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"Risk and Returns: The Sharpe Ratio",
     "description":"Use pandas to calculate and compare profitability and risk of different investments using the Sharpe Ratio.\n\n        ",
     "time":"45 minutes",
     "stream":"Applied Finance, Case Studies",
     "technology":"python"
  },
  {
     "title":"Find Movie Similarity from Plot Summaries",
     "description":"Use NLP and clustering on movie plot summaries from IMDb and Wikipedia to quantify movie similarity.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"Give Life: Predict Blood Donations",
     "description":"Build a binary classifier to predict if a blood donor is likely to donate again.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Machine Learning...",
     "technology":"python"
  },
  {
     "title":"The Android App Market on Google Play",
     "description":"Load, clean, and visualize scraped Google Play Store data to understand the Android app market.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"Extract Stock Sentiment from News Headlines",
     "description":"Scrape news headlines for FB and TSLA then apply sentiment analysis to generate investment insight.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"Book Recommendations from Charles Darwin",
     "description":"Build a book recommendation system using NLP and the text of books like \"On the Origin of Species.\"\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"Predicting Credit Card Approvals",
     "description":"Build a machine learning model to predict if a credit card application will get approved. \n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Machine Learning...",
     "technology":"python"
  },
  {
     "title":"Naïve Bees: Deep Learning with Images",
     "description":"Build a deep learning model that can automatically detect honey bees and bumble bees in images.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"Up and Down With the Kardashians",
     "description":"Plot Google Trends data to find the most famous Kardashian/Jenner sister. Is it Kim? Kendall? Kylie?\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"ASL Recognition with Deep Learning",
     "description":"Build a convolutional neural network to classify images of letters from American Sign Language.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"Which Debts Are Worth the Bank's Effort?",
     "description":"Play bank data scientist and use regression discontinuity to see which debts are worth collecting.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"Do Left-handed People Really Die Young?",
     "description":"Use pandas and Bayesian statistics to see if left-handed people actually die earlier than righties.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"Who Is Drunk and When in Ames, Iowa?",
     "description":"Flex your pandas muscles on breath alcohol test data from Ames, Iowa, USA.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"Who's Tweeting? Trump or Trudeau?",
     "description":"Build a machine learning classifier that knows whether President Trump or Prime Minister Trudeau is tweeting!\n\n        ",
     "time":"60 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"Reducing Traffic Mortality in the USA",
     "description":"How can we find a good strategy for reducing traffic-related deaths?\n\n        ",
     "time":"60 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"Classify Song Genres from Audio Data",
     "description":"Rock or rap? Apply machine learning methods in Python to classify songs into genres.\n\n        ",
     "time":"60 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"A Visual History of Nobel Prize Winners",
     "description":"Explore a dataset from Kaggle containing a century's worth of Nobel Laureates. Who won? Who got snubbed?\n\n        ",
     "time":"60 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"Naïve Bees: Predict Species from Images",
     "description":"Build a model that can automatically detect honey bees and bumble bees in images.\n\n        ",
     "time":"60 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"Generating Keywords for Google Ads",
     "description":"Automatically generate keywords for a search engine marketing campaign using Python. \n\n        ",
     "time":"60 minutes",
     "stream":"Data Manipulation",
     "technology":"python"
  },
  {
     "title":"Word Frequency in Moby Dick",
     "description":"Use web scraping and NLP to find the most frequent words in Herman Melville's novel, Moby Dick.\n\n        ",
     "time":"45 minutes",
     "stream":"Importing & Cleaning Data, Case Studies",
     "technology":"python"
  },
  {
     "title":"Naïve Bees: Image Loading and Processing",
     "description":"Load, transform, and understand images of honey bees and bumble bees in Python.\n\n        ",
     "time":"60 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"Introduction to DataCamp Projects",
     "description":"If you've never done a DataCamp project, this is the place to start! \n\n        ",
     "time":"30 minutes",
     "stream":"Data Visualization, Case Studies",
     "technology":"python"
  },
  {
     "title":"A New Era of Data Analysis in Baseball",
     "description":"Use MLB's Statcast data to compare New York Yankees sluggers Aaron Judge and Giancarlo Stanton.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"Dr. Semmelweis and the Discovery of Handwashing",
     "description":"Reanalyse the data behind one of the most important discoveries of modern medicine: handwashing.\n\n        ",
     "time":"60 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"Mobile Games A/B Testing with Cookie Cats",
     "description":"Analyze an A/B test from the popular mobile puzzle game, Cookie Cats.\n\n        ",
     "time":"45 minutes",
     "stream":"Case Studies",
     "technology":"python"
  },
  {
     "title":"The GitHub History of the Scala Language",
     "description":"Find the true Scala experts by exploring its development history in Git and GitHub.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"The Hottest Topics in Machine Learning",
     "description":"Use Natural Language Processing on NIPS papers to uncover the trendiest topics in machine learning research.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"Bad passwords and the NIST guidelines",
     "description":"Check what passwords fail to conform to the National Institute of Standards and Technology password guidelines.\n\n        ",
     "time":"45 minutes",
     "stream":"Case Studies",
     "technology":"python"
  },
  {
     "title":"Recreating John Snow's Ghost Map",
     "description":"Recreate John Snow's famous map of the 1854 cholera outbreak in London.\n\n        ",
     "time":"60 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  },
  {
     "title":"Exploring the Evolution of Linux",
     "description":"Find out about the evolution of the Linux operating system by exploring its version control system.\n\n        ",
     "time":"45 minutes",
     "stream":"Importing & Cleaning Data, Case Studies",
     "technology":"python"
  },
  {
     "title":"Exploring 67 years of LEGO",
     "description":"In this project we will explore a database of every LEGO set ever built.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"python"
  }
];
const otherCourses= [
  {
     "title":"Introduction to SQL",
     "description":"Master the basics of querying tables in relational databases such as MySQL, SQL Server, and PostgreSQL.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"sql"
  },
  {
     "title":"Data Science for Everyone",
     "description":"An introduction to data science with no coding involved.",
     "time":"4 hours",
     "stream":"Other",
     "technology":"theory"
  },
  {
     "title":"Joining Data in SQL",
     "description":"Join two or three tables together into one, combine tables using set theory, and work with subqueries in PostgreSQL.",
     "time":"5 hours",
     "stream":"Data Manipulation",
     "technology":"sql"
  },
  {
     "title":"Introduction to Tableau",
     "description":"Get started with Tableau, a widely used business intelligence (BI) and analytics software to explore, visualize, and securely share data.",
     "time":"4 hours",
     "stream":"Data Visualization",
     "technology":"tableau"
  },
  {
     "title":"Data Analysis in Excel",
     "description":"Learn how to analyze data in Excel.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"excel"
  },
  {
     "title":"Introduction to Power BI",
     "description":"Gain a 360° overview of how to explore and use Power BI to build impactful reports.",
     "time":"4 hours",
     "stream":"Data Visualization",
     "technology":"power_bi"
  },
  {
     "title":"Data Engineering for Everyone",
     "description":"Discover how data engineers lay the groundwork that makes data science possible.",
     "time":"2 hours",
     "stream":"Data Engineering",
     "technology":"theory"
  },
  {
     "title":"Machine Learning for Everyone",
     "description":"An introduction to machine learning with no coding involved.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"theory"
  },
  {
     "title":"Introduction to SQL Server",
     "description":"Become proficient at using SQL Server to perform common data manipulation tasks.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"sql"
  },
  {
     "title":"Intermediate SQL",
     "description":"Master the complex SQL queries necessary to answer a wide variety of data science questions and prepare robust data sets for analysis in PostgreSQL.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"sql"
  },
  {
     "title":"Data Visualization for Everyone",
     "description":"An introduction to data visualization with no coding involved.",
     "time":"4 hours",
     "stream":"Data Visualization",
     "technology":"theory"
  },
  {
     "title":"Introduction to Relational Databases in SQL",
     "description":"Learn how to create one of the most efficient ways of storing data - relational databases!",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"sql"
  },
  {
     "title":"Introduction to Git",
     "description":"This course is an introduction to version control with Git for data scientists.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"git"
  },
  {
     "title":"Introduction to Shell",
     "description":"The Unix command line helps users combine existing programs in new ways, automate repetitive tasks, and run programs on clusters and clouds.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"shell"
  },
  {
     "title":"Data Science for Business",
     "description":"Learn about data science and how can you use it to strengthen your organization.",
     "time":"4 hours",
     "stream":"Management",
     "technology":"theory"
  },
  {
     "title":"Exploratory Data Analysis in SQL",
     "description":"Learn how to explore what's available in a database: the tables, relationships between them, and data stored in them.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"sql"
  },
  {
     "title":"Intermediate SQL Server",
     "description":"In this course, you will use T-SQL, the flavor of SQL used in Microsoft's SQL Server for data analysis.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"sql"
  },
  {
     "title":"Data Analysis in Spreadsheets",
     "description":"Learn how to analyze data with spreadsheets using functions such as SUM(), AVERAGE(), and VLOOKUP().",
     "time":"3 hours",
     "stream":"Programming",
     "technology":"spreadsheets"
  },
  {
     "title":"Database Design",
     "description":"Learn to design databases in SQL.",
     "time":"4 hours",
     "stream":"Data Engineering",
     "technology":"sql"
  },
  {
     "title":"PostgreSQL Summary Stats and Window Functions",
     "description":"Learn how to create queries for analytics and data engineering with window functions, the SQL secret weapon!",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"sql"
  },
  {
     "title":"Pivot Tables in Spreadsheets",
     "description":"Explore the world of Pivot Tables within Google Sheets, and learn how to quickly organize thousands of data points with just a few clicks of the mouse.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"spreadsheets"
  },
  {
     "title":"Conda Essentials",
     "description":"Learn how to easily manage your software using conda.",
     "time":"3 hours",
     "stream":"Programming",
     "technology":"shell"
  },
  {
     "title":"Time Series Analysis in SQL Server",
     "description":"Explore ways to work with date and time data in SQL Server for time series analysis",
     "time":"5 hours",
     "stream":"Data Manipulation",
     "technology":"sql"
  },
  {
     "title":"Intermediate Spreadsheets",
     "description":"Expand your spreadsheets vocabulary by diving deeper into data types, including numeric data, logical data, and missing data.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"spreadsheets"
  },
  {
     "title":"Functions for Manipulating Data in PostgreSQL",
     "description":"Learn the most important PostgreSQL functions for manipulating, processing, and transforming data.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"sql"
  },
  {
     "title":"Introduction to Bash Scripting",
     "description":"Bash scripting allows you to build analytics pipelines in the cloud and work with data stored across multiple files.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"shell"
  },
  {
     "title":"Data Visualization in Spreadsheets",
     "description":"Learn the fundamentals of data visualization using spreadsheets.",
     "time":"4 hours",
     "stream":"Data Visualization",
     "technology":"spreadsheets"
  },
  {
     "title":"Introduction to Spreadsheets",
     "description":"Learn the basics of spreadsheets by working with rows, columns, addresses, and ranges.",
     "time":"2 hours",
     "stream":"Programming",
     "technology":"spreadsheets"
  },
  {
     "title":"Introduction to Scala",
     "description":"Begin your journey with Scala, a popular language for scalable applications and data engineering infrastructure.",
     "time":"3 hours",
     "stream":"Programming",
     "technology":"scala"
  },
  {
     "title":"Functions for Manipulating Data in SQL Server",
     "description":"Learn the most important functions for manipulating, processing, and transforming data in SQL Server.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"sql"
  },
  {
     "title":"Introduction to Statistics in Spreadsheets",
     "description":"Learn how to leverage statistical techniques using spreadsheets to more effectively work with and extract insights from your data.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"spreadsheets"
  },
  {
     "title":"Improving Query Performance in SQL Server",
     "description":"In this course, students will learn to write queries that are both efficient and easy to read and understand.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"sql"
  },
  {
     "title":"Analyzing Business Data in SQL",
     "description":"Learn to write SQL queries to calculate key metrics that businesses use to measure performance.",
     "time":"4 hours",
     "stream":"Reporting",
     "technology":"sql"
  },
  {
     "title":"Building and Optimizing Triggers in SQL Server",
     "description":"Learn how to design and implement triggers in SQL Server using real-world examples.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"sql"
  },
  {
     "title":"Writing Functions and Stored Procedures in SQL Server",
     "description":"Master SQL Server programming by learning to create, update, and execute functions and stored procedures.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"sql"
  },
  {
     "title":"Reporting in SQL",
     "description":"Learn how to build your very own dashboard by applying all the SQL concepts and functions you have learned in previous courses.",
     "time":"4 hours",
     "stream":"Reporting",
     "technology":"sql"
  },
  {
     "title":"Applying SQL to Real-World Problems",
     "description":"Find tables, store and manage new tables and views, and write maintainable SQL code to answer business questions.",
     "time":"4 hours",
     "stream":"Case Studies",
     "technology":"sql"
  },
  {
     "title":"Hierarchical and Recursive Queries in SQL Server",
     "description":"Learn how to write recursive queries and query hierarchical data structures.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"sql"
  },
  {
     "title":"Data Processing in Shell",
     "description":"Learn powerful command-line skills to download, process, and transform data, including machine learning pipeline.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"shell"
  },
  {
     "title":"Data-Driven Decision Making in SQL",
     "description":"Learn how to analyze a SQL table and report insights to management.",
     "time":"4 hours",
     "stream":"Case Studies",
     "technology":"sql"
  },
  {
     "title":"Transactions and Error Handling in SQL Server",
     "description":"Learn to write scripts that will catch and handle errors and control for multiple operations happening at once.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"sql"
  },
  {
     "title":"Financial Modeling in Spreadsheets",
     "description":"Learn basic business modeling including cash flows, investments, annuities, loan amortization, and more using Sheets.",
     "time":"4 hours",
     "stream":"Applied Finance",
     "technology":"spreadsheets"
  },
  {
     "title":"Machine Learning for Business",
     "description":"Understand the fundamentals of Machine Learning and how it's applied in the business world.",
     "time":"4 hours",
     "stream":"Machine Learning",
     "technology":"theory"
  },
  {
     "title":"Marketing Analytics in Spreadsheets",
     "description":"Learn how to ensure clean data entry and build dynamic dashboards to display your marketing data.",
     "time":"4 hours",
     "stream":"Case Studies",
     "technology":"spreadsheets"
  },
  {
     "title":"Financial Analytics in Spreadsheets",
     "description":"Learn how to build a graphical dashboard with spreadsheets to track the performance of financial securities.",
     "time":"4 hours",
     "stream":"Applied Finance",
     "technology":"spreadsheets"
  },
  {
     "title":"Conditional Formatting in Spreadsheets",
     "description":"Learn how to use conditional formatting with your data through built-in options and by creating custom formulas.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"spreadsheets"
  },
  {
     "title":"Creating PostgreSQL Databases",
     "description":"This course teaches you the skills and knowledge necessary to create and manage your own PostgreSQL databases.",
     "time":"4 hours",
     "stream":"Importing & Cleaning Data",
     "technology":"sql"
  },
  {
     "title":"Error and Uncertainty in Spreadsheets",
     "description":"Learn to distinguish real differences from random noise, and explore psychological crutches we use that interfere with our rational decision making.",
     "time":"4 hours",
     "stream":"Probability & Statistics",
     "technology":"spreadsheets"
  },
  {
     "title":"Introduction to Oracle SQL",
     "description":"Learn how to import and manipulate data with Oracle SQL.",
     "time":"4 hours",
     "stream":"Data Manipulation",
     "technology":"sql"
  },
  {
     "title":"Improving Query Performance in PostgreSQL",
     "description":"Learn how to structure your PostgreSQL queries to run in a fraction of the time.",
     "time":"4 hours",
     "stream":"Programming",
     "technology":"sql"
  },
  {
     "title":"Analyze International Debt Statistics",
     "description":"Write SQL queries to answer interesting questions about international debt using data from The World Bank.\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Importing & Cleaning Data",
     "technology":"sql"
  },
  {
     "title":"Introduction to DataCamp Projects",
     "description":"If you've never done a DataCamp project, this is the place to start!\n\n        ",
     "time":"45 minutes",
     "stream":"Data Manipulation, Data Visualization...",
     "technology":"sql"
  }
];

console.log(rCourses.length);
console.log(pCourses.length);
console.log(otherCourses.length);
export const courses =rCourses.concat(pCourses).concat(otherCourses);
