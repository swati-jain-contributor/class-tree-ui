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
const rCourses = [{
  "title": "Introduction to R",
  "description": "Master the basics of data analysis by manipulating common data structures such as vectors, matrices, and data frames.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "r",
  "id": "r-course-00001",
  "price": "2240"
}, {
  "title": "Intermediate R",
  "description": "Continue your journey to becoming an R ninja by learning about conditional statements, loops, and vector functions.",
  "time": "12 hours",
  "stream": "Programming",
  "technology": "r",
  "id": "r-course-00002",
  "price": "4000"
}, {
  "title": "Introduction to the Tidyverse",
  "description": "Get started on the path to exploring and visualizing your own data with the tidyverse, a powerful and popular collection of data science tools within R.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "r",
  "id": "r-course-00003",
  "price": "2240"
}, {
  "title": "Introduction to Data Visualization with ggplot2",
  "description": "Learn to produce meaningful and beautiful data visualizations with ggplot2 by understanding the grammar of graphics.",
  "time": "8 hours",
  "stream": "Data Visualization",
  "technology": "r",
  "id": "visualization-course-00001",
  "price": "3000"
}, {
  "title": "Data Manipulation with dplyr",
  "description": "Learn to transform and manipulate your data using dplyr.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "r",
  "id": "others-course-00001",
  "price": "3000"
}, {
  "title": "Introduction to Importing Data in R",
  "description": "In this course, you will learn to read CSV, XLS, and text files in R using tools like readxl and data.table.",
  "time": "6 hours",
  "stream": "Importing & Cleaning Data",
  "technology": "r",
  "id": "cleaning-course-00001",
  "price": "2400"
}, {
  "title": "Introduction to Regression in R",
  "description": "Predict housing prices and ad click-through rate by implementing, analyzing, and interpreting regression analysis in R.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00001",
  "price": "2400"
}, {
  "title": "Intermediate Data Visualization with ggplot2",
  "description": "Learn to use facets, coordinate systems and statistics in ggplot2 to create meaningful explanatory plots.",
  "time": "8 hours",
  "stream": "Data Visualization",
  "technology": "r",
  "id": "visualization-course-00002",
  "price": "3000"
}, {
  "title": "Data Cleaning in R",
  "description": "Develop the skills you need to go from raw data to awesome insights as quickly and accurately as possible.",
  "time": "8 hours",
  "stream": "Importing & Cleaning Data",
  "technology": "r",
  "id": "cleaning-course-00002",
  "price": "3000"
}, {
  "title": "Joining Data with dplyr",
  "description": "Learn to combine data across multiple tables to answer more complex questions with dplyr.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "r",
  "id": "others-course-00002",
  "price": "3000"
}, {
  "title": "Exploratory Data Analysis in R",
  "description": "Learn how to use graphical and numerical techniques to begin uncovering the structure of your data.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00002",
  "price": "2400"
}, {
  "title": "Introduction to Data in R",
  "description": "Learn the language of data, study types, sampling strategies, and experimental design.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00003",
  "price": "2400"
}, {
  "title": "Correlation and Regression in R",
  "description": "Learn how to describe relationships between two numerical quantities and characterize these relationships graphically.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00004",
  "price": "2400"
}, {
  "title": "Supervised Learning in R: Classification",
  "description": "In this course you will learn the basics of machine learning for classification.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "r",
  "id": "ml-course-00001",
  "price": "3800"
}, {
  "title": "Introduction to Statistics in R",
  "description": "Grow your statistical skills and learn how to collect, analyze, and draw accurate conclusions from data.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00005",
  "price": "2400"
}, {
  "title": "Intermediate Importing Data in R",
  "description": "Parse data in any format. Whether it's flat files, statistical software, databases, or data right from the web.",
  "time": "6 hours",
  "stream": "Importing & Cleaning Data",
  "technology": "r",
  "id": "cleaning-course-00003",
  "price": "2400"
}, {
  "title": "Multiple and Logistic Regression in R",
  "description": "In this course you'll learn to add multiple variables to linear models and to use logistic regression for classification.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00006",
  "price": "2400"
}, {
  "title": "Introduction to Writing Functions in R",
  "description": "Take your R skills up a notch by learning to write efficient, reusable functions.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "r",
  "id": "r-course-00004",
  "price": "2240"
}, {
  "title": "Case Study: Exploratory Data Analysis in R",
  "description": "Use data manipulation and visualization skills to explore the historical voting of the United Nations General Assembly.",
  "time": "8 hours",
  "stream": "Case Studies",
  "technology": "r",
  "id": "others-course-00003",
  "price": "4000"
}, {
  "title": "Introduction to R for Finance",
  "description": "Learn essential data structures such as lists and data frames and apply that knowledge directly to financial examples.",
  "time": "8 hours",
  "stream": "Applied Finance",
  "technology": "r",
  "id": "others-course-00004",
  "price": "4000"
}, {
  "title": "Working with Dates and Times in R",
  "description": "Learn the essentials of parsing, manipulating and computing with dates and times in R.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "r",
  "id": "r-course-00005",
  "price": "2240"
}, {
  "title": "Data Visualization in R",
  "description": "This course provides a comprehensive introduction to working with base graphics in R.",
  "time": "8 hours",
  "stream": "Data Visualization",
  "technology": "r",
  "id": "visualization-course-00003",
  "price": "3000"
}, {
  "title": "Writing Efficient R Code",
  "description": "Learn to write faster R code, discover benchmarking and profiling, and unlock the secrets of parallel programming.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "r",
  "id": "r-course-00006",
  "price": "2240"
}, {
  "title": "Supervised Learning in R: Regression",
  "description": "In this course you will learn how to predict future events using linear regression, generalized additive models, random forests, and xgboost.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "r",
  "id": "ml-course-00002",
  "price": "3800"
}, {
  "title": "Building Web Applications with Shiny in R",
  "description": "Shiny is an R package that makes it easy to build interactive web apps directly in R, allowing your team to explore your data as dashboards or visualizations.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "r",
  "id": "r-course-00007",
  "price": "2240"
}, {
  "title": "Cluster Analysis in R",
  "description": "Develop a strong intuition for how hierarchical and k-means clustering work and learn how to apply them to extract insights from your data.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "r",
  "id": "ml-course-00003",
  "price": "3800"
}, {
  "title": "Time Series Analysis in R",
  "description": "Learn the core techniques necessary to extract meaningful insights from time series data.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00007",
  "price": "2400"
}, {
  "title": "Unsupervised Learning in R",
  "description": "This course provides an intro to clustering and dimensionality reduction in R from a machine learning perspective.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "r",
  "id": "ml-course-00004",
  "price": "3800"
}, {
  "title": "Forecasting in R",
  "description": "Learn how to make predictions about the future using time series forecasting in R.",
  "time": "10 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00008",
  "price": "3800"
}, {
  "title": "Communicating with Data in the Tidyverse",
  "description": "Leverage the power of tidyverse tools to create publication-quality graphics and custom-styled reports that communicate your results.",
  "time": "8 hours",
  "stream": "Data Visualization",
  "technology": "r",
  "id": "visualization-course-00004",
  "price": "3000"
}, {
  "title": "Machine Learning with caret in R",
  "description": "This course teaches the big ideas in machine learning like how to build and evaluate predictive models.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "r",
  "id": "ml-course-00005",
  "price": "3800"
}, {
  "title": "Fundamentals of Bayesian Data Analysis in R",
  "description": "Learn what Bayesian data analysis is, how it works, and why it is a useful tool to have in your data science toolbox.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00009",
  "price": "2400"
}, {
  "title": "Working with Data in the Tidyverse",
  "description": "Learn to work with data using tools from the tidyverse, and master the important skills of taming and tidying your data.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "r",
  "id": "others-course-00005",
  "price": "3000"
}, {
  "title": "Data Manipulation with data.table in R",
  "description": "Master core concepts about data manipulation such as filtering, selecting and calculating groupwise statistics using data.table.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "r",
  "id": "r-course-00008",
  "price": "2240"
}, {
  "title": "String Manipulation with stringr in R",
  "description": "Learn how to pull character strings apart, put them back together and use the stringr package.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "r",
  "id": "r-course-00009",
  "price": "2240"
}, {
  "title": "Manipulating Time Series Data with xts and zoo in R",
  "description": "The xts and zoo packages make the task of managing and manipulating ordered observations fast and mistake free.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "r",
  "id": "others-course-00006",
  "price": "3000"
}, {
  "title": "Reporting with R Markdown",
  "description": "R Markdown is an easy-to-use formatting language for authoring dynamic reports from R code.",
  "time": "8 hours",
  "stream": "Reporting",
  "technology": "r",
  "id": "others-course-00007",
  "price": "4000"
}, {
  "title": "Intermediate R for Finance",
  "description": "Learn about how dates work in R, and explore the world of if statements, loops, and functions using financial examples.",
  "time": "10 hours",
  "stream": "Applied Finance",
  "technology": "r",
  "id": "others-course-00008",
  "price": "4400"
}, {
  "title": "Foundations of Inference",
  "description": "Learn how to draw conclusions about a population from a sample of data via a process known as statistical inference.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00010",
  "price": "2400"
}, {
  "title": "Foundations of Probability in R",
  "description": "In this course, you'll learn about the concepts of random variables, distributions, and conditioning.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00011",
  "price": "2400"
}, {
  "title": "Modeling with Data in the Tidyverse",
  "description": "Explore Linear Regression in a tidy framework.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00012",
  "price": "2400"
}, {
  "title": "Credit Risk Modeling in R",
  "description": "Apply statistical modeling in a real-life setting using logistic regression and decision trees to model credit risk.",
  "time": "8 hours",
  "stream": "Applied Finance",
  "technology": "r",
  "id": "others-course-00009",
  "price": "4000"
}, {
  "title": "Text Mining with Bag-of-Words in R",
  "description": "Learn the bag of words technique for text mining with R.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "r",
  "id": "ml-course-00006",
  "price": "3800"
}, {
  "title": "Joining Data with data.table in R",
  "description": "This course will show you how to combine and merge datasets with data.table.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "r",
  "id": "others-course-00010",
  "price": "3000"
}, {
  "title": "Visualizing Geospatial Data in R",
  "description": "Learn to read, explore, and manipulate spatial data then use your skills to create informative maps using R.",
  "time": "8 hours",
  "stream": "Data Visualization",
  "technology": "r",
  "id": "visualization-course-00005",
  "price": "3000"
}, {
  "title": "Working with Web Data in R",
  "description": "Learn how to efficiently import data from the web into R.",
  "time": "8 hours",
  "stream": "Importing & Cleaning Data",
  "technology": "r",
  "id": "cleaning-course-00004",
  "price": "3000"
}, {
  "title": "Introduction to Portfolio Analysis in R",
  "description": "Apply your finance and R skills to backtest, analyze, and optimize financial portfolios.",
  "time": "10 hours",
  "stream": "Applied Finance",
  "technology": "r",
  "id": "others-course-00011",
  "price": "4400"
}, {
  "title": "Building Dashboards with shinydashboard",
  "description": "In this course you'll learn to build dashboards using the shinydashboard package.",
  "time": "8 hours",
  "stream": "Reporting",
  "technology": "r",
  "id": "others-course-00012",
  "price": "4000"
}, {
  "title": "Categorical Data in the Tidyverse",
  "description": "Get ready to categorize! In this course, you will work with non-numerical data, such as job titles or survey responses, using the Tidyverse landscape.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "r",
  "id": "others-course-00013",
  "price": "3000"
}, {
  "title": "Introduction to Statistical Modeling in R",
  "description": "This course is designed to get you up to speed with the most important and powerful methodologies in statistics.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00013",
  "price": "2400"
}, {
  "title": "Parallel Programming in R",
  "description": "This course covers in detail the tools available in R for parallel computing.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "r",
  "id": "r-course-00010",
  "price": "2240"
}, {
  "title": "Experimental Design in R",
  "description": "In this course you'll learn about basic experimental design, a crucial part of any data analysis.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00014",
  "price": "2400"
}, {
  "title": "Hierarchical and Mixed Effects Models in R",
  "description": "In this course you will learn to fit hierarchical models with random effects.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00015",
  "price": "2400"
}, {
  "title": "Tree-Based Models in R",
  "description": "In this course, you'll learn how to use tree-based models and ensembles for regression and classification.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "r",
  "id": "ml-course-00007",
  "price": "3800"
}, {
  "title": "A-B Testing in R",
  "description": "Learn A/B testing: including hypothesis testing, experimental design, and confounding variables.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00016",
  "price": "2400"
}, {
  "title": "Introduction to Text Analysis in R",
  "description": "Analyze text data in R using the tidy framework.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "r",
  "id": "others-course-00014",
  "price": "3000"
}, {
  "title": "ARIMA Models in R",
  "description": "Become an expert in fitting ARIMA (autoregressive integrated moving average) models to time series data using R.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00017",
  "price": "2400"
}, {
  "title": "Linear Algebra for Data Science in R",
  "description": "This course is an introduction to linear algebra, one of the most important mathematical topics underpinning data science.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00018",
  "price": "2400"
}, {
  "title": "Case Studies: Building Web Applications with Shiny in R",
  "description": "Practice your Shiny skills while building some fun Shiny apps for real-life scenarios!",
  "time": "8 hours",
  "stream": "Reporting",
  "technology": "r",
  "id": "others-course-00015",
  "price": "4000"
}, {
  "title": "Generalized Linear Models in R",
  "description": "The Generalized Linear Model course expands your regression toolbox to include logistic and Poisson regression.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00019",
  "price": "2400"
}, {
  "title": "Financial Trading in R",
  "description": "This course covers the basics of financial trading and how to use quantstrat to build signal-based trading strategies.",
  "time": "10 hours",
  "stream": "Applied Finance",
  "technology": "r",
  "id": "others-course-00016",
  "price": "4400"
}, {
  "title": "Importing and Managing Financial Data in R",
  "description": "Learn how to access financial data from local files as well as from internet sources.",
  "time": "10 hours",
  "stream": "Applied Finance",
  "technology": "r",
  "id": "others-course-00017",
  "price": "4400"
}, {
  "title": "Survival Analysis in R",
  "description": "Learn to work with time-to-event data. The event may be death or finding a job after unemployment. Learn to estimate, visualize, and interpret survival models!",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00020",
  "price": "2400"
}, {
  "title": "Interactive Maps with leaflet in R",
  "description": "Learn how to produce interactive web maps with ease using leaflet.",
  "time": "8 hours",
  "stream": "Data Visualization",
  "technology": "r",
  "id": "visualization-course-00006",
  "price": "3000"
}, {
  "title": "Network Analysis in R",
  "description": "In this course you'll learn to analyze and visualize network data with the igraph package.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00021",
  "price": "2400"
}, {
  "title": "Machine Learning in the Tidyverse",
  "description": "Leverage the tools in the tidyverse to generate, explore and evaluate machine learning models.",
  "time": "10 hours",
  "stream": "Machine Learning",
  "technology": "r",
  "id": "ml-course-00008",
  "price": "3200"
}, {
  "title": "Dealing With Missing Data in R",
  "description": "Make it easy to visualise, explore, and impute missing data with naniar, a tidyverse friendly approach to missing data.",
  "time": "8 hours",
  "stream": "Importing & Cleaning Data",
  "technology": "r",
  "id": "cleaning-course-00005",
  "price": "3000"
}, {
  "title": "RNA-Seq with Bioconductor in R",
  "description": "Use RNA-Seq differential expression analysis to identify genes likely to be important for different diseases or conditions.",
  "time": "8 hours",
  "stream": "Other",
  "technology": "r",
  "id": "others-course-00018",
  "price": "4000"
}, {
  "title": "Quantitative Risk Management in R",
  "description": "Work with risk-factor return series, study their empirical properties, and make estimates of value-at-risk.",
  "time": "10 hours",
  "stream": "Applied Finance",
  "technology": "r",
  "id": "others-course-00019",
  "price": "4400"
}, {
  "title": "Introduction to Bioconductor in R",
  "description": "Learn to use essential bioconductor packages using datasets from virus, fungus, human and plants!",
  "time": "8 hours",
  "stream": "Other",
  "technology": "r",
  "id": "others-course-00020",
  "price": "4000"
}, {
  "title": "Bayesian Modeling with RJAGS",
  "description": "In this course, you'll learn how to implement more advanced Bayesian models using RJAGS.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00022",
  "price": "2400"
}, {
  "title": "Introduction to Spark with sparklyr in R",
  "description": "Learn how to analyze huge datasets using Apache Spark and R using the sparklyr package.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "r",
  "id": "r-course-00011",
  "price": "2240"
}, {
  "title": "Choice Modeling for Marketing in R",
  "description": "Learn to analyze and model customer choice data in R.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00023",
  "price": "2400"
}, {
  "title": "Building Dashboards with flexdashboard",
  "description": "In this course you'll learn how to create static and interactive dashboards using flexdashboard and shiny.",
  "time": "8 hours",
  "stream": "Reporting",
  "technology": "r",
  "id": "others-course-00021",
  "price": "4000"
}, {
  "title": "Spatial Analysis with sf and raster in R",
  "description": "Analyze spatial data using the sf and raster packages.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00024",
  "price": "2400"
}, {
  "title": "Intermediate Portfolio Analysis in R",
  "description": "Advance you R finance skills to backtest, analyze, and optimize financial portfolios.",
  "time": "10 hours",
  "stream": "Applied Finance",
  "technology": "r",
  "id": "others-course-00022",
  "price": "4400"
}, {
  "title": "Analyzing Social Media Data in R",
  "description": "Extract and visualize Twitter data, perform sentiment and network analysis, and map the geolocation of your tweets.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "r",
  "id": "others-course-00023",
  "price": "3000"
}, {
  "title": "Inference for Categorical Data in R",
  "description": "In this course you'll learn how to leverage statistical techniques for working with categorical data.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00025",
  "price": "2400"
}, {
  "title": "Bond Valuation and Analysis in R",
  "description": "Learn to use R to develop models to evaluate and analyze bonds as well as protect them from interest rate changes.",
  "time": "8 hours",
  "stream": "Applied Finance",
  "technology": "r",
  "id": "others-course-00024",
  "price": "4000"
}, {
  "title": "Inference for Linear Regression in R",
  "description": "In this course you'll learn how to perform inference using linear models.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00026",
  "price": "2400"
}, {
  "title": "Visualizing Time Series Data in R",
  "description": "Learn how to visualize time series in R, then practice with a stock-picking case study.",
  "time": "8 hours",
  "stream": "Data Visualization",
  "technology": "r",
  "id": "visualization-course-00007",
  "price": "3000"
}, {
  "title": "Dimensionality Reduction in R",
  "description": "Develop your intuition for when to reduce dimensionality in your data, and master the fundamentals of how to do so in R.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "r",
  "id": "ml-course-00009",
  "price": "3800"
}, {
  "title": "Spatial Statistics in R",
  "description": "Learn how to make sense of spatial data and deal with various classes of statistical problems associated with it.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00027",
  "price": "2400"
}, {
  "title": "Visualization Best Practices in R",
  "description": "Learn to effectively convey your data with an overview of common charts, alternative visualization types, and perception-driven style enhancements.",
  "time": "8 hours",
  "stream": "Data Visualization",
  "technology": "r",
  "id": "visualization-course-00008",
  "price": "3000"
}, {
  "title": "Topic Modeling in R",
  "description": "Learn how to fit topic models using the Latent Dirichlet Allocation algorithm.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "r",
  "id": "ml-course-00010",
  "price": "3800"
}, {
  "title": "Analyzing Survey Data in R",
  "description": "Learn survey design using common design structures followed by visualizing and analyzing survey results.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00028",
  "price": "2400"
}, {
  "title": "Factor Analysis in R",
  "description": "Explore latent variables, such as personality using exploratory and confirmatory factor analyses.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00029",
  "price": "2400"
}, {
  "title": "Advanced Dimensionality Reduction in R",
  "description": "Learn how to apply advanced dimensionality techniques such as t-SNE and GLRM.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "r",
  "id": "ml-course-00011",
  "price": "3800"
}, {
  "title": "Foundations of Functional Programming with purrr",
  "description": "Learn to easily summarize and manipulate lists using the purrr package.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "r",
  "id": "r-course-00012",
  "price": "2240"
}, {
  "title": "Developing R Packages",
  "description": "Create and share your own R Packages!",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "r",
  "id": "r-course-00013",
  "price": "2240"
}, {
  "title": "Structural Equation Modeling with lavaan in R",
  "description": "Learn how to create and assess measurement models used to confirm the structure of a scale or questionnaire.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00030",
  "price": "2400"
}, {
  "title": "Interactive Data Visualization with plotly in R",
  "description": "Learn to create interactive graphics entirely in R with plotly.",
  "time": "8 hours",
  "stream": "Data Visualization",
  "technology": "r",
  "id": "visualization-course-00009",
  "price": "3000"
}, {
  "title": "Support Vector Machines in R",
  "description": "This course will introduce the support vector machine (SVM) using an intuitive, visual approach.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "r",
  "id": "ml-course-00012",
  "price": "3800"
}, {
  "title": "Bayesian Regression Modeling with rstanarm",
  "description": "Learn how to leverage Bayesian estimation methods to make better inferences about linear regression models.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00031",
  "price": "2400"
}, {
  "title": "Sentiment Analysis in R",
  "description": "Learn sentiment analysis by identifying positive and negative language, specific emotional intent and making compelling visualizations.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "r",
  "id": "ml-course-00013",
  "price": "3800"
}, {
  "title": "Introduction to Natural Language Processing in R",
  "description": "Gain an overview of all the skills and tools needed to excel in Natural Language Processing in R.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "r",
  "id": "ml-course-00014",
  "price": "3800"
}, {
  "title": "Case Studies: Manipulating Time Series Data in R",
  "description": "Strengthen your knowledge of the topics covered in Manipulating Time Series in R using real case study data.",
  "time": "8 hours",
  "stream": "Case Studies",
  "technology": "r",
  "id": "others-course-00025",
  "price": "4000"
}, {
  "title": "Machine Learning for Marketing Analytics in R",
  "description": "In this course you'll learn how to use data science for several common marketing tasks.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "r",
  "id": "ml-course-00015",
  "price": "3800"
}, {
  "title": "Anomaly Detection in R",
  "description": "Learn statistical tests for identifying outliers and how to use sophisticated anomaly scoring algorithms.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "r",
  "id": "probabilty-course-00032",
  "price": "2400"
}, {
  "title": "Single-Cell RNA-Seq with Bioconductor in R",
  "description": "Analyze single-cell RNA-Seq data using normalization, dimensionality reduction, clustering and differential expression.",
  "time": "8 hours",
  "stream": "Other",
  "technology": "r",
  "id": "others-course-00026",
  "price": "4000"
}];
const pCourses = [{
  "title": "Introduction to Python",
  "description": "Master the basics of data analysis in Python. Expand your skillset by learning scientific computing with numpy.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "python",
  "id": "python-course-00001",
  "price": "2240"
}, {
  "title": "Intermediate Python",
  "description": "Level up your data science skills by creating visualizations using Matplotlib and manipulating DataFrames with pandas.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "python",
  "id": "python-course-00002",
  "price": "2240"
}, {
  "title": "Introduction to Data Science in Python",
  "description": "Dive into data science using Python and learn how to effectively analyze and visualize your data.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "python",
  "id": "python-course-00003",
  "price": "2240"
}, {
  "title": "Data Manipulation with pandas",
  "description": "Use the world’s most popular Python data science package to manipulate data and calculate summary statistics.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "python",
  "id": "others-course-00031",
  "price": "3000"
}, {
  "title": "Supervised Learning with scikit-learn",
  "description": "Learn how to build and tune predictive models and evaluate how well they'll perform on unseen data.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00017",
  "price": "3800"
}, {
  "title": "Python Data Science Toolbox (Part 1)",
  "description": "Learn the art of writing your own functions in Python, as well as key concepts like scoping and error handling.",
  "time": "6 hours",
  "stream": "Programming",
  "technology": "python",
  "id": "python-course-00004",
  "price": "2000"
}, {
  "title": "Python Data Science Toolbox (Part 2)",
  "description": "Continue to build your modern Data Science skills by learning about iterators and list comprehensions.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "python",
  "id": "python-course-00005",
  "price": "2240"
}, {
  "title": "Merging DataFrames with pandas",
  "description": "This course is all about the act of combining, or merging, DataFrames, an essential part your Data Scientist's toolbox.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "python",
  "id": "others-course-00032",
  "price": "3000"
}, {
  "title": "Introduction to Importing Data in Python",
  "description": "Learn to import data into Python from various sources, such as Excel, SQL, SAS and right from the web.",
  "time": "6 hours",
  "stream": "Importing & Cleaning Data",
  "technology": "python",
  "id": "cleaning-course-00008",
  "price": "2400"
}, {
  "title": "Introduction to Data Visualization with Matplotlib",
  "description": "Learn how to create, customize, and share data visualizations using Matplotlib.",
  "time": "8 hours",
  "stream": "Data Visualization",
  "technology": "python",
  "id": "visualization-course-00040",
  "price": "3000"
}, {
  "title": "Statistical Thinking in Python (Part 1)",
  "description": "Build the foundation you need to think statistically and to speak the language of your data.",
  "time": "6 hours",
  "stream": "Probability & Statistics",
  "technology": "python",
  "id": "probabilty-course-00036",
  "price": "2200"
}, {
  "title": "Introduction to Data Engineering",
  "description": "Learn about the world of data engineering with an overview of all its relevant topics and tools!",
  "time": "8 hours",
  "stream": "Data Engineering",
  "technology": "python",
  "id": "others-course-00033",
  "price": "3000"
}, {
  "title": "Data Cleaning in Python",
  "description": "Learn to diagnose and treat dirty data and develop the skills needed to transform your raw data into accurate insights!",
  "time": "8 hours",
  "stream": "Importing & Cleaning Data",
  "technology": "python",
  "id": "cleaning-course-00009",
  "price": "3000"
}, {
  "title": "Introduction to Deep Learning in Python",
  "description": "Learn the fundamentals of neural networks and how to build deep learning models using Keras 2.0.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00018",
  "price": "3800"
}, {
  "title": "Introduction to Data Visualization in Python",
  "description": "Learn complex data visualization techniques using Matplotlib and seaborn.",
  "time": "8 hours",
  "stream": "Data Visualization",
  "technology": "python",
  "id": "visualization-course-00041",
  "price": "3000"
}, {
  "title": "Introduction to Data Visualization with Seaborn",
  "description": "Learn how to create informative and attractive visualizations in Python using the Seaborn library.",
  "time": "8 hours",
  "stream": "Data Visualization",
  "technology": "python",
  "id": "visualization-course-00042",
  "price": "3000"
}, {
  "title": "Intermediate Importing Data in Python",
  "description": "Improve your Python data importing skills and learn to work with web and API data.",
  "time": "5 hours",
  "stream": "Importing & Cleaning Data",
  "technology": "python",
  "id": "cleaning-course-00010",
  "price": "2200"
}, {
  "title": "Exploratory Data Analysis in Python",
  "description": "Learn how to explore, visualize, and extract insights from data.",
  "time": "8 hours",
  "stream": "Case Studies",
  "technology": "python",
  "id": "others-course-00034",
  "price": "4000"
}, {
  "title": "Unsupervised Learning in Python",
  "description": "Learn how to cluster, transform, visualize, and extract insights from unlabeled datasets using scikit-learn and scipy.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00019",
  "price": "3800"
}, {
  "title": "pandas Foundations",
  "description": "Learn how to use the industry-standard pandas library to import, build, and manipulate DataFrames.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "python",
  "id": "others-course-00035",
  "price": "3000"
}, {
  "title": "Introduction to PySpark",
  "description": "Learn to implement distributed data management and machine learning in Spark using the PySpark package.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "python",
  "id": "python-course-00006",
  "price": "2240"
}, {
  "title": "Statistical Thinking in Python (Part 2)",
  "description": "Learn to perform the two key tasks in statistical inference: parameter estimation and hypothesis testing.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "python",
  "id": "probabilty-course-00037",
  "price": "2400"
}, {
  "title": "Introduction to Natural Language Processing in Python",
  "description": "Learn fundamental natural language processing techniques using Python and how to apply them to extract insights from real-world text data.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00020",
  "price": "3800"
}, {
  "title": "Machine Learning with Tree-Based Models in Python",
  "description": "In this course, you'll learn how to use tree-based models and ensembles for regression and classification using scikit-learn.",
  "time": "10 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00021",
  "price": "3200"
}, {
  "title": "Writing Functions in Python",
  "description": "Learn to use best practices to write maintainable, reusable, complex functions with good documentation.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "python",
  "id": "python-course-00007",
  "price": "2240"
}, {
  "title": "Object-Oriented Programming in Python",
  "description": "Dive in and learn how to create classes and leverage inheritance and polymorphism to reuse and optimize code.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "python",
  "id": "python-course-00008",
  "price": "2240"
}, {
  "title": "Working with Dates and Times in Python",
  "description": "Learn how to work with dates and times in Python.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "python",
  "id": "python-course-00009",
  "price": "2240"
}, {
  "title": "Web Scraping in Python",
  "description": "Learn to retrieve and parse information from the internet using the Python library scrapy.",
  "time": "8 hours",
  "stream": "Importing & Cleaning Data",
  "technology": "python",
  "id": "cleaning-course-00011",
  "price": "3000"
}, {
  "title": "Intermediate Data Visualization with Seaborn",
  "description": "Use Seaborn's sophisticated visualization tools to make beautiful, informative visualizations with ease.",
  "time": "8 hours",
  "stream": "Data Visualization",
  "technology": "python",
  "id": "visualization-course-00043",
  "price": "3000"
}, {
  "title": "Writing Efficient Python Code",
  "description": "Learn to write efficient code that executes quickly and allocates resources skillfully to avoid unnecessary overhead.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "python",
  "id": "python-course-00010",
  "price": "2240"
}, {
  "title": "Cluster Analysis in Python",
  "description": "In this course, you will be introduced to unsupervised learning through techniques such as hierarchical and k-means clustering using the SciPy library.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00022",
  "price": "3800"
}, {
  "title": "Analyzing Police Activity with pandas",
  "description": "Explore the Stanford Open Policing Project dataset and analyze the impact of gender on police behavior using pandas.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "python",
  "id": "others-course-00036",
  "price": "3000"
}, {
  "title": "Introduction to Databases in Python",
  "description": "In this course, you'll learn the basics of relational databases and how to interact with them.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "python",
  "id": "others-course-00037",
  "price": "3000"
}, {
  "title": "Data Types for Data Science in Python",
  "description": "Consolidate and extend your knowledge of Python data types such as lists, dictionaries, and tuples, leveraging them to solve Data Science problems.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "python",
  "id": "python-course-00011",
  "price": "2240"
}, {
  "title": "Streamlined Data Ingestion with pandas",
  "description": "Learn to acquire data from common file formats and systems such as CSV files, spreadsheets, JSON, SQL databases, and APIs.",
  "time": "8 hours",
  "stream": "Importing & Cleaning Data",
  "technology": "python",
  "id": "cleaning-course-00012",
  "price": "3000"
}, {
  "title": "Introduction to Python for Finance",
  "description": "This course introduces Python for financial analysis.",
  "time": "8 hours",
  "stream": "Applied Finance",
  "technology": "python",
  "id": "others-course-00038",
  "price": "4000"
}, {
  "title": "Case Study: School Budgeting with Machine Learning in Python",
  "description": "Learn how to build a model to automatically classify items in a school budget.",
  "time": "8 hours",
  "stream": "Case Studies",
  "technology": "python",
  "id": "others-course-00039",
  "price": "4000"
}, {
  "title": "Manipulating DataFrames with pandas",
  "description": "You will learn how to tidy, rearrange, and restructure your data using versatile pandas DataFrames.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "python",
  "id": "others-course-00040",
  "price": "3000"
}, {
  "title": "Image Processing in Python",
  "description": "Learn to process, transform, and manipulate images at your will.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00023",
  "price": "3800"
}, {
  "title": "Intermediate Python for Finance",
  "description": "Build on top of your Python skills for Finance, by learning how to use datetime, if-statements, DataFrames, and more.",
  "time": "8 hours",
  "stream": "Applied Finance",
  "technology": "python",
  "id": "others-course-00041",
  "price": "4000"
}, {
  "title": "Manipulating Time Series Data in Python",
  "description": "In this course you'll learn the basics of working with time series data.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "python",
  "id": "others-course-00042",
  "price": "3000"
}, {
  "title": "Introduction to TensorFlow in Python",
  "description": "Learn the fundamentals of neural networks and how to build deep learning models using TensorFlow.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00024",
  "price": "3800"
}, {
  "title": "Linear Classifiers in Python",
  "description": "In this course you will learn the details of linear classifiers like logistic regression and SVM.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00025",
  "price": "3800"
}, {
  "title": "Preprocessing for Machine Learning in Python",
  "description": "In this course you'll learn how to get your cleaned data ready for modeling.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00026",
  "price": "3800"
}, {
  "title": "Software Engineering for Data Scientists in Python",
  "description": "Learn all about modularity, documentation, & automated testing to help you solve Data Science problems quicker and more reliably.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "python",
  "id": "python-course-00012",
  "price": "2240"
}, {
  "title": "Extreme Gradient Boosting with XGBoost",
  "description": "Learn the fundamentals of gradient boosting and build state-of-the-art machine learning models using XGBoost to solve classification and regression problems.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00027",
  "price": "3800"
}, {
  "title": "Machine Learning for Time Series Data in Python",
  "description": "This course focuses on feature engineering and machine learning for time series data.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00028",
  "price": "3800"
}, {
  "title": "Introduction to Deep Learning with Keras",
  "description": "Learn to start developing deep learning models with Keras.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00029",
  "price": "3800"
}, {
  "title": "Time Series Analysis in Python",
  "description": "In this course you'll learn the basics of analyzing time series data.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "python",
  "id": "probabilty-course-00038",
  "price": "2400"
}, {
  "title": "Feature Engineering for Machine Learning in Python",
  "description": "Create new features to improve the performance of your Machine Learning models.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00030",
  "price": "3800"
}, {
  "title": "Building Chatbots in Python",
  "description": "Learn the fundamentals of how to build conversational bots using rule-based systems as well as machine learning.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00031",
  "price": "3800"
}, {
  "title": "Regular Expressions in Python",
  "description": "Learn about string manipulation and become a master at using regular expressions.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "python",
  "id": "others-course-00043",
  "price": "3000"
}, {
  "title": "Interactive Data Visualization with Bokeh",
  "description": "Learn how to create versatile and interactive data visualizations using Bokeh.",
  "time": "8 hours",
  "stream": "Data Visualization",
  "technology": "python",
  "id": "visualization-course-00044",
  "price": "3000"
}, {
  "title": "Big Data Fundamentals with PySpark",
  "description": "Learn the fundamentals of working with big data with PySpark.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "python",
  "id": "python-course-00013",
  "price": "2240"
}, {
  "title": "Image Processing with Keras in Python",
  "description": "Learn powerful techniques for image analysis in Python using deep learning and convolutional neural networks in Keras.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00032",
  "price": "3800"
}, {
  "title": "Market Basket Analysis in Python",
  "description": "Explore association rules in market basket analysis with Python by bookstore data and creating movie recommendations.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00033",
  "price": "3800"
}, {
  "title": "Advanced Deep Learning with Keras",
  "description": "Build multiple-input and multiple-output deep learning models using Keras.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00034",
  "price": "3800"
}, {
  "title": "Dimensionality Reduction in Python",
  "description": "Learn to reduce dimensionality in Python.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00035",
  "price": "3800"
}, {
  "title": "Introduction to Network Analysis in Python",
  "description": "This course will equip you with the skills to analyze, visualize, and make sense of networks using the NetworkX library.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "python",
  "id": "probabilty-course-00039",
  "price": "2400"
}, {
  "title": "Feature Engineering for NLP in Python",
  "description": "Learn techniques to extract useful information from text and process them into a format suitable for machine learning.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00036",
  "price": "3800"
}, {
  "title": "Introduction to Deep Learning with PyTorch",
  "description": "Learn to create deep learning models with the PyTorch library.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00037",
  "price": "3800"
}, {
  "title": "Importing and Managing Financial Data in Python",
  "description": "In this course, you'll learn how to import and manage financial data in Python using various tools and sources.",
  "time": "10 hours",
  "stream": "Applied Finance",
  "technology": "python",
  "id": "others-course-00044",
  "price": "4400"
}, {
  "title": "Introduction to Airflow in Python",
  "description": "Learn how to to implement and schedule data engineering workflows.",
  "time": "8 hours",
  "stream": "Data Engineering",
  "technology": "python",
  "id": "others-course-00045",
  "price": "3000"
}, {
  "title": "Building Data Engineering Pipelines in Python",
  "description": "Learn how to build data engineering pipelines in Python.",
  "time": "8 hours",
  "stream": "Data Engineering",
  "technology": "python",
  "id": "others-course-00046",
  "price": "3000"
}, {
  "title": "Unit Testing for Data Science in Python",
  "description": "Learn how to write unit tests for your Data Science projects in Python using pytest.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "python",
  "id": "python-course-00014",
  "price": "2240"
}, {
  "title": "Marketing Analytics: Predicting Customer Churn in Python",
  "description": "Learn how to use Python to analyze customer churn and build a model to predict it.",
  "time": "8 hours",
  "stream": "Case Studies",
  "technology": "python",
  "id": "others-course-00047",
  "price": "4000"
}, {
  "title": "Machine Learning with PySpark",
  "description": "Learn how to make predictions with Apache Spark.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00038",
  "price": "3800"
}, {
  "title": "Hyperparameter Tuning in Python",
  "description": "Learn to tune hyperparameters in Python.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00039",
  "price": "3800"
}, {
  "title": "Model Validation in Python",
  "description": "Learn the basics of model validation, validation techniques, and begin creating validated and high performing models.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00040",
  "price": "3800"
}, {
  "title": "Machine Learning for Finance in Python",
  "description": "Learn to model and predict stock data values using linear models, decision trees, random forests, and neural networks.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00041",
  "price": "3800"
}, {
  "title": "Working with the Class System in Python",
  "description": "Learn the fundamentals of object-oriented programming: classes, objects, methods, inheritance, polymorphism, and others!",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "python",
  "id": "python-course-00015",
  "price": "2240"
}, {
  "title": "Dealing with Missing Data in Python",
  "description": "Learn how to identify, analyze, remove and impute missing data in Python.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "python",
  "id": "others-course-00048",
  "price": "3000"
}, {
  "title": "Winning a Kaggle Competition in Python",
  "description": "Learn how to approach and win competitions on Kaggle.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00042",
  "price": "3800"
}, {
  "title": "Customer Analytics and A-B Testing in Python",
  "description": "Learn how to use Python to create, run, and analyze A/B tests to make proactive business decisions.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "python",
  "id": "probabilty-course-00040",
  "price": "2400"
}, {
  "title": "Introduction to Linear Modeling in Python",
  "description": "Explore the concepts and applications of linear models with python and build models to describe, predict, and extract insight from data patterns.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "python",
  "id": "probabilty-course-00041",
  "price": "2400"
}, {
  "title": "Introduction to Portfolio Risk Management in Python",
  "description": "Evaluate portfolio risk and returns, construct market-cap weighted equity portfolios and learn how to forecast and hedge market risk via scenario generation.",
  "time": "8 hours",
  "stream": "Applied Finance",
  "technology": "python",
  "id": "others-course-00049",
  "price": "4000"
}, {
  "title": "Introduction to Financial Concepts in Python",
  "description": "Using Python and NumPy, learn the most fundamental financial concepts.",
  "time": "8 hours",
  "stream": "Applied Finance",
  "technology": "python",
  "id": "others-course-00050",
  "price": "4000"
}, {
  "title": "AI Fundamentals",
  "description": "Learn the fundamentals of AI. No programming experience required!",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00043",
  "price": "3800"
}, {
  "title": "Cleaning Data with PySpark",
  "description": "Learn how to clean data with Apache Spark in Python.",
  "time": "8 hours",
  "stream": "Importing & Cleaning Data",
  "technology": "python",
  "id": "cleaning-course-00013",
  "price": "3000"
}, {
  "title": "Advanced NLP with spaCy",
  "description": "Learn how to use spaCy to build advanced natural language understanding systems, using both rule-based and machine learning approaches.",
  "time": "10 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00044",
  "price": "3200"
}, {
  "title": "Parallel Programming with Dask in Python",
  "description": "Learn how to take the Python workflows you currently have and easily scale them up to large datasets without the need for distributed computing environments.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "python",
  "id": "others-course-00051",
  "price": "3000"
}, {
  "title": "Credit Risk Modeling in Python",
  "description": "Learn how to prepare credit application data, apply machine learning and business rules to reduce risk and ensure profitability.",
  "time": "8 hours",
  "stream": "Applied Finance",
  "technology": "python",
  "id": "others-course-00052",
  "price": "4000"
}, {
  "title": "Practicing Coding Interview Questions in Python",
  "description": "Prepare for your next coding interviews in Python.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "python",
  "id": "python-course-00016",
  "price": "2240"
}, {
  "title": "Sentiment Analysis in Python",
  "description": "Are customers thrilled with your products or is your service lacking? Learn how to perform an end-to-end sentiment analysis task.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00045",
  "price": "3800"
}, {
  "title": "Customer Segmentation in Python",
  "description": "Learn how to segment customers in Python.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00046",
  "price": "3800"
}, {
  "title": "ARIMA Models in Python",
  "description": "Learn about ARIMA models in Python and become an expert in time series analysis.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00047",
  "price": "3800"
}, {
  "title": "Biomedical Image Analysis in Python",
  "description": "Learn the fundamentals of exploring, manipulating, and measuring biomedical image data.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "python",
  "id": "others-course-00053",
  "price": "3000"
}, {
  "title": "Statistical Simulation in Python",
  "description": "Learn to solve increasingly complex problems using simulations to generate and analyze data.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "python",
  "id": "probabilty-course-00042",
  "price": "2400"
}, {
  "title": "Introduction to AWS Boto in Python",
  "description": "Learn about AWS Boto and harnessing cloud technology to optimize your data workflow.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "python",
  "id": "python-course-00017",
  "price": "2240"
}, {
  "title": "Introduction to MongoDB in Python",
  "description": "Learn to manipulate and analyze flexibly structured data with MongoDB.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "python",
  "id": "others-course-00054",
  "price": "3000"
}, {
  "title": "Introduction to Spark SQL in Python",
  "description": "Learn how to manipulate data and create machine learning feature sets in Spark using SQL in Python.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "python",
  "id": "others-course-00055",
  "price": "3000"
}, {
  "title": "Recurrent Neural Networks for Language Modeling in Python",
  "description": "Use RNNs to classify text sentiment, generate sentences, and translate text between languages.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00048",
  "price": "3800"
}, {
  "title": "Introduction to Predictive Analytics in Python",
  "description": "In this course you'll learn to use and present logistic regression models for making predictions.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00049",
  "price": "3800"
}, {
  "title": "Introduction to Portfolio Analysis in Python",
  "description": "Learn how to calculate meaningful measures of risk and performance, and how to compile an optimal portfolio for the desired risk and return trade-off.",
  "time": "8 hours",
  "stream": "Applied Finance",
  "technology": "python",
  "id": "others-course-00056",
  "price": "4000"
}, {
  "title": "Visualizing Time Series Data in Python",
  "description": "Visualize seasonality, trends and other patterns in your time series data.",
  "time": "8 hours",
  "stream": "Data Visualization",
  "technology": "python",
  "id": "visualization-course-00045",
  "price": "3000"
}, {
  "title": "Quantitative Risk Management in Python",
  "description": "Learn about risk management, value at risk and more applied to the 2008 financial crisis using Python.",
  "time": "8 hours",
  "stream": "Applied Finance",
  "technology": "python",
  "id": "others-course-00057",
  "price": "4000"
}, {
  "title": "Writing Efficient Code with pandas",
  "description": "Learn efficient techniques in pandas to optimize your Python code.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "python",
  "id": "python-course-00018",
  "price": "2240"
}, {
  "title": "Visualizing Geospatial Data in Python",
  "description": "Learn how to make attractive visualizations of geospatial data in Python using the geopandas package and folium maps.",
  "time": "8 hours",
  "stream": "Data Visualization",
  "technology": "python",
  "id": "visualization-course-00046",
  "price": "3000"
}, {
  "title": "Supply Chain Analytics in Python",
  "description": "Leverage the power of Python and PuLP to optimize supply chains.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "python",
  "id": "ml-course-00050",
  "price": "3800"
}, {
  "title": "Case Studies in Statistical Thinking",
  "description": "Take vital steps towards mastery as you apply your statistical thinking skills to real-world data sets and extract actionable insights from them.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "python",
  "id": "probabilty-course-00043",
  "price": "2400"
}];
const otherCourses = [{
  "title": "Introduction to SQL",
  "description": "Master the basics of querying tables in relational databases such as MySQL, SQL Server, and PostgreSQL.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "sql",
  "id": "sql-course-00001",
  "price": "2240"
}, {
  "title": "Data Science for Everyone",
  "description": "An introduction to data science with no coding involved.",
  "time": "8 hours",
  "stream": "Other",
  "technology": "theory",
  "id": "theory-course-00001",
  "price": "4000"
}, {
  "title": "Joining Data in SQL",
  "description": "Join two or three tables together into one, combine tables using set theory, and work with subqueries in PostgreSQL.",
  "time": "10 hours",
  "stream": "Data Manipulation",
  "technology": "sql",
  "id": "sql-course-00002",
  "price": "4000"
}, {
  "title": "Introduction to Tableau",
  "description": "Get started with Tableau, a widely used business intelligence (BI) and analytics software to explore, visualize, and securely share data.",
  "time": "8 hours",
  "stream": "Data Visualization",
  "technology": "tableau",
  "id": "tableau-course-00001",
  "price": "3000"
}, {
  "title": "Data Analysis in Excel",
  "description": "Learn how to analyze data in Excel.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "excel",
  "id": "excel-course-00001",
  "price": "3000"
}, {
  "title": "Introduction to Power BI",
  "description": "Gain a 360° overview of how to explore and use Power BI to build impactful reports.",
  "time": "8 hours",
  "stream": "Data Visualization",
  "technology": "power_bi",
  "id": "power_bi-course-00001",
  "price": "3000"
}, {
  "title": "Data Engineering for Everyone",
  "description": "Discover how data engineers lay the groundwork that makes data science possible.",
  "time": "5 hours",
  "stream": "Data Engineering",
  "technology": "theory",
  "id": "theory-course-00002",
  "price": "2200"
}, {
  "title": "Machine Learning for Everyone",
  "description": "An introduction to machine learning with no coding involved.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "theory",
  "id": "theory-course-00003",
  "price": "3800"
}, {
  "title": "Introduction to SQL Server",
  "description": "Become proficient at using SQL Server to perform common data manipulation tasks.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "sql",
  "id": "sql-course-00003",
  "price": "2240"
}, {
  "title": "Intermediate SQL",
  "description": "Master the complex SQL queries necessary to answer a wide variety of data science questions and prepare robust data sets for analysis in PostgreSQL.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "sql",
  "id": "sql-course-00004",
  "price": "2240"
}, {
  "title": "Data Visualization for Everyone",
  "description": "An introduction to data visualization with no coding involved.",
  "time": "8 hours",
  "stream": "Data Visualization",
  "technology": "theory",
  "id": "theory-course-00004",
  "price": "3000"
}, {
  "title": "Introduction to Relational Databases in SQL",
  "description": "Learn how to create one of the most efficient ways of storing data - relational databases!",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "sql",
  "id": "sql-course-00005",
  "price": "2240"
}, {
  "title": "Introduction to Git",
  "description": "This course is an introduction to version control with Git for data scientists.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "git",
  "id": "git-course-00001",
  "price": "2240"
}, {
  "title": "Introduction to Shell",
  "description": "The Unix command line helps users combine existing programs in new ways, automate repetitive tasks, and run programs on clusters and clouds.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "shell",
  "id": "shell-course-00001",
  "price": "2240"
}, {
  "title": "Data Science for Business",
  "description": "Learn about data science and how can you use it to strengthen your organization.",
  "time": "8 hours",
  "stream": "Management",
  "technology": "theory",
  "id": "theory-course-00005",
  "price": "4000"
}, {
  "title": "Exploratory Data Analysis in SQL",
  "description": "Learn how to explore what's available in a database: the tables, relationships between them, and data stored in them.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "sql",
  "id": "sql-course-00006",
  "price": "3000"
}, {
  "title": "Intermediate SQL Server",
  "description": "In this course, you will use T-SQL, the flavor of SQL used in Microsoft's SQL Server for data analysis.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "sql",
  "id": "sql-course-00007",
  "price": "2240"
}, {
  "title": "Data Analysis in Spreadsheets",
  "description": "Learn how to analyze data with spreadsheets using functions such as SUM(), AVERAGE(), and VLOOKUP().",
  "time": "6 hours",
  "stream": "Programming",
  "technology": "spreadsheets",
  "id": "spreadsheets-course-00001",
  "price": "2000"
}, {
  "title": "Database Design",
  "description": "Learn to design databases in SQL.",
  "time": "8 hours",
  "stream": "Data Engineering",
  "technology": "sql",
  "id": "sql-course-00008",
  "price": "3000"
}, {
  "title": "PostgreSQL Summary Stats and Window Functions",
  "description": "Learn how to create queries for analytics and data engineering with window functions, the SQL secret weapon!",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "sql",
  "id": "sql-course-00009",
  "price": "3000"
}, {
  "title": "Pivot Tables in Spreadsheets",
  "description": "Explore the world of Pivot Tables within Google Sheets, and learn how to quickly organize thousands of data points with just a few clicks of the mouse.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "spreadsheets",
  "id": "spreadsheets-course-00002",
  "price": "3000"
}, {
  "title": "Conda Essentials",
  "description": "Learn how to easily manage your software using conda.",
  "time": "6 hours",
  "stream": "Programming",
  "technology": "shell",
  "id": "shell-course-00002",
  "price": "2000"
}, {
  "title": "Time Series Analysis in SQL Server",
  "description": "Explore ways to work with date and time data in SQL Server for time series analysis",
  "time": "10 hours",
  "stream": "Data Manipulation",
  "technology": "sql",
  "id": "sql-course-00010",
  "price": "4000"
}, {
  "title": "Intermediate Spreadsheets",
  "description": "Expand your spreadsheets vocabulary by diving deeper into data types, including numeric data, logical data, and missing data.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "spreadsheets",
  "id": "spreadsheets-course-00003",
  "price": "2240"
}, {
  "title": "Functions for Manipulating Data in PostgreSQL",
  "description": "Learn the most important PostgreSQL functions for manipulating, processing, and transforming data.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "sql",
  "id": "sql-course-00011",
  "price": "3000"
}, {
  "title": "Introduction to Bash Scripting",
  "description": "Bash scripting allows you to build analytics pipelines in the cloud and work with data stored across multiple files.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "shell",
  "id": "shell-course-00003",
  "price": "2240"
}, {
  "title": "Data Visualization in Spreadsheets",
  "description": "Learn the fundamentals of data visualization using spreadsheets.",
  "time": "8 hours",
  "stream": "Data Visualization",
  "technology": "spreadsheets",
  "id": "spreadsheets-course-00004",
  "price": "3000"
}, {
  "title": "Introduction to Spreadsheets",
  "description": "Learn the basics of spreadsheets by working with rows, columns, addresses, and ranges.",
  "time": "5 hours",
  "stream": "Programming",
  "technology": "spreadsheets",
  "id": "spreadsheets-course-00005",
  "price": "2000"
}, {
  "title": "Introduction to Scala",
  "description": "Begin your journey with Scala, a popular language for scalable applications and data engineering infrastructure.",
  "time": "6 hours",
  "stream": "Programming",
  "technology": "scala",
  "id": "scala-course-00001",
  "price": "2000"
}, {
  "title": "Functions for Manipulating Data in SQL Server",
  "description": "Learn the most important functions for manipulating, processing, and transforming data in SQL Server.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "sql",
  "id": "sql-course-00012",
  "price": "3000"
}, {
  "title": "Introduction to Statistics in Spreadsheets",
  "description": "Learn how to leverage statistical techniques using spreadsheets to more effectively work with and extract insights from your data.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "spreadsheets",
  "id": "spreadsheets-course-00006",
  "price": "2400"
}, {
  "title": "Improving Query Performance in SQL Server",
  "description": "In this course, students will learn to write queries that are both efficient and easy to read and understand.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "sql",
  "id": "sql-course-00013",
  "price": "2240"
}, {
  "title": "Analyzing Business Data in SQL",
  "description": "Learn to write SQL queries to calculate key metrics that businesses use to measure performance.",
  "time": "8 hours",
  "stream": "Reporting",
  "technology": "sql",
  "id": "sql-course-00014",
  "price": "4000"
}, {
  "title": "Building and Optimizing Triggers in SQL Server",
  "description": "Learn how to design and implement triggers in SQL Server using real-world examples.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "sql",
  "id": "sql-course-00015",
  "price": "2240"
}, {
  "title": "Writing Functions and Stored Procedures in SQL Server",
  "description": "Master SQL Server programming by learning to create, update, and execute functions and stored procedures.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "sql",
  "id": "sql-course-00016",
  "price": "2240"
}, {
  "title": "Reporting in SQL",
  "description": "Learn how to build your very own dashboard by applying all the SQL concepts and functions you have learned in previous courses.",
  "time": "8 hours",
  "stream": "Reporting",
  "technology": "sql",
  "id": "sql-course-00017",
  "price": "4000"
}, {
  "title": "Applying SQL to Real-World Problems",
  "description": "Find tables, store and manage new tables and views, and write maintainable SQL code to answer business questions.",
  "time": "8 hours",
  "stream": "Case Studies",
  "technology": "sql",
  "id": "sql-course-00018",
  "price": "4000"
}, {
  "title": "Hierarchical and Recursive Queries in SQL Server",
  "description": "Learn how to write recursive queries and query hierarchical data structures.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "sql",
  "id": "sql-course-00019",
  "price": "2240"
}, {
  "title": "Data Processing in Shell",
  "description": "Learn powerful command-line skills to download, process, and transform data, including machine learning pipeline.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "shell",
  "id": "shell-course-00004",
  "price": "3000"
}, {
  "title": "Data-Driven Decision Making in SQL",
  "description": "Learn how to analyze a SQL table and report insights to management.",
  "time": "8 hours",
  "stream": "Case Studies",
  "technology": "sql",
  "id": "sql-course-00020",
  "price": "4000"
}, {
  "title": "Transactions and Error Handling in SQL Server",
  "description": "Learn to write scripts that will catch and handle errors and control for multiple operations happening at once.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "sql",
  "id": "sql-course-00021",
  "price": "3000"
}, {
  "title": "Financial Modeling in Spreadsheets",
  "description": "Learn basic business modeling including cash flows, investments, annuities, loan amortization, and more using Sheets.",
  "time": "8 hours",
  "stream": "Applied Finance",
  "technology": "spreadsheets",
  "id": "spreadsheets-course-00007",
  "price": "4000"
}, {
  "title": "Machine Learning for Business",
  "description": "Understand the fundamentals of Machine Learning and how it's applied in the business world.",
  "time": "8 hours",
  "stream": "Machine Learning",
  "technology": "theory",
  "id": "theory-course-00006",
  "price": "3800"
}, {
  "title": "Marketing Analytics in Spreadsheets",
  "description": "Learn how to ensure clean data entry and build dynamic dashboards to display your marketing data.",
  "time": "8 hours",
  "stream": "Case Studies",
  "technology": "spreadsheets",
  "id": "spreadsheets-course-00008",
  "price": "4000"
}, {
  "title": "Financial Analytics in Spreadsheets",
  "description": "Learn how to build a graphical dashboard with spreadsheets to track the performance of financial securities.",
  "time": "8 hours",
  "stream": "Applied Finance",
  "technology": "spreadsheets",
  "id": "spreadsheets-course-00009",
  "price": "4000"
}, {
  "title": "Conditional Formatting in Spreadsheets",
  "description": "Learn how to use conditional formatting with your data through built-in options and by creating custom formulas.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "spreadsheets",
  "id": "spreadsheets-course-00010",
  "price": "3000"
}, {
  "title": "Creating PostgreSQL Databases",
  "description": "This course teaches you the skills and knowledge necessary to create and manage your own PostgreSQL databases.",
  "time": "8 hours",
  "stream": "Importing & Cleaning Data",
  "technology": "sql",
  "id": "sql-course-00022",
  "price": "3000"
}, {
  "title": "Error and Uncertainty in Spreadsheets",
  "description": "Learn to distinguish real differences from random noise, and explore psychological crutches we use that interfere with our rational decision making.",
  "time": "8 hours",
  "stream": "Probability & Statistics",
  "technology": "spreadsheets",
  "id": "spreadsheets-course-00011",
  "price": "2400"
}, {
  "title": "Introduction to Oracle SQL",
  "description": "Learn how to import and manipulate data with Oracle SQL.",
  "time": "8 hours",
  "stream": "Data Manipulation",
  "technology": "sql",
  "id": "sql-course-00023",
  "price": "3000"
}, {
  "title": "Improving Query Performance in PostgreSQL",
  "description": "Learn how to structure your PostgreSQL queries to run in a fraction of the time.",
  "time": "8 hours",
  "stream": "Programming",
  "technology": "sql",
  "id": "sql-course-00024",
  "price": "2240"
}];

console.log(rCourses.length);
console.log(pCourses.length);
console.log(otherCourses.length);
export const courses = rCourses.concat(pCourses).concat(otherCourses);
