export interface TechItem {
  img: string;
  cat: string;
  name: string;
}

export const TECH_CATEGORIES = [
  "All",
  "Security",
  "Analytics",
  "DevOps",
  "Database",
  "AI",
  "Cloud",
  "Mobile",
  "Backend",
  "Frontend",
] as const;

export type TechCategory = (typeof TECH_CATEGORIES)[number];

export const TECH_ITEMS: TechItem[] = [
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/6ad4646aa7125043ab4096eb_Tech_framer_color.svg",
    "cat": "Frontend",
    "name": "framer"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/6ad33a3c55a3dd66945ee1e1_Tech_aws_color.svg",
    "cat": "Security",
    "name": "aws"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/6ad0ae031473147183bbd0f4_Tech_microsoftazure_color.svg",
    "cat": "Cloud",
    "name": "microsoftazure"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/6ad5b50ab18a2fd330d97f06_Tech_kotlin_color.svg",
    "cat": "Database",
    "name": "kotlin"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1e056ebd4818c6e76f700_Tech_sentry_color.svg",
    "cat": "Analytics",
    "name": "sentry"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1e04661ed4c6e18698a75_Tech_mixpanel_color.svg",
    "cat": "Analytics",
    "name": "mixpanel"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1e035750cf95a0795136f_Tech_meta_color.svg",
    "cat": "Analytics",
    "name": "meta"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1e01bb78a1aa4a3cd5845_Tech_hotjar_color.svg",
    "cat": "Analytics",
    "name": "hotjar"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1e00cb52f97013a2dd48d_Tech_googleanalytics_color.svg",
    "cat": "Analytics",
    "name": "googleanalytics"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1dffab16a8af506309e7a_Tech_firebase_color.svg",
    "cat": "Analytics",
    "name": "firebase"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1dfdcc4c9539181999dc3_Tech_datadog_color.svg",
    "cat": "Analytics",
    "name": "datadog"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1dfa9abd16ed117046b79_Tech_amplitude_color.svg",
    "cat": "Analytics",
    "name": "amplitude"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1df63d8ddeaf1b08c776e_Tech_replicate_color.svg",
    "cat": "AI",
    "name": "replicate"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1df3e8206c36e04a56d4e_Tech_pinecode_color.svg",
    "cat": "AI",
    "name": "pinecode"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1df2d347a03c4fde5345b_Tech_pgvector_color.svg",
    "cat": "AI",
    "name": "pgvector"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/6acf744e8da9e6192b9bcbe2_Tech_openai_color.svg",
    "cat": "AI",
    "name": "openai"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1def5a7438019c7b6f81e_Tech_ollama_color.svg",
    "cat": "AI",
    "name": "ollama"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1dee690e90062fa51256c_Tech_langchain_color.svg",
    "cat": "AI",
    "name": "langchain"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1de9670c19ae9733cf5fd_Tech_huggingface_color.svg",
    "cat": "AI",
    "name": "huggingface"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1de769845cbdfff2aa56f_Tech_gemini_color.svg",
    "cat": "AI",
    "name": "gemini"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1de62680980af07473b6f_Tech_falai_color.svg",
    "cat": "AI",
    "name": "falai"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1de52da3f764922e3738c_Tech_crewai_color.svg",
    "cat": "AI",
    "name": "crewai"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1de4055206e70f954ae81_Tech_chromadb_color.svg",
    "cat": "AI",
    "name": "chromadb"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1de24b47e7f63cd6ecee8_Tech_anthropic_color.svg",
    "cat": "AI",
    "name": "anthropic"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1dde3521621acef924791_Tech_terraform_color.svg",
    "cat": "DevOps",
    "name": "terraform"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1ddcc3431c8353311f390_Tech_nginx_color.svg",
    "cat": "DevOps",
    "name": "nginx"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1ddbb7912055373725016_Tech_linux_color.svg",
    "cat": "DevOps",
    "name": "linux"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1dda8d3c9e80e95971437_Tech_kubernetes_color.svg",
    "cat": "DevOps",
    "name": "kubernetes"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1dd9691033fcf85be969c_Tech_jenkins_color.svg",
    "cat": "DevOps",
    "name": "jenkins"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1dd81a12f097f9b2afaa1_Tech_githubactions_color.svg",
    "cat": "DevOps",
    "name": "githubactions"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1dd6c0c1b13962f8b77f7_Tech_gitlab_color.svg",
    "cat": "DevOps",
    "name": "gitlab"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1dd57a7438019c7b6a694_Tech_git_color.svg",
    "cat": "DevOps",
    "name": "git"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1dd1f666687af91c45a3a_Tech_docker_color.svg",
    "cat": "DevOps",
    "name": "docker"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1dc6ef535b2da9ed17b50_Tech_vercel_color.svg",
    "cat": "Cloud",
    "name": "vercel"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1dc5d80c50c68802f3024_Tech_netify_color.svg",
    "cat": "Cloud",
    "name": "netify"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1dc48c124339fc67a0979_Tech_heroku_color.svg",
    "cat": "Cloud",
    "name": "heroku"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1dc34f535b2da9ed17304_Tech_googlecloud_color.svg",
    "cat": "Cloud",
    "name": "googlecloud"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1dc23f00ebfc8813bf20d_Tech_digitalocean_color.svg",
    "cat": "Cloud",
    "name": "digitalocean"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1dc11d89d6fab0d7a486a_Tech_cloudflare_color.svg",
    "cat": "Cloud",
    "name": "cloudflare"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1dc0075569b371377053b_Tech_aws_color.svg",
    "cat": "Cloud",
    "name": "aws"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1db62666687af91c3fe1e_Tech_swift_color.svg",
    "cat": "Mobile",
    "name": "swift"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1dae8982b3f2728c4d4e8_Tech_kotlin_color.svg",
    "cat": "Mobile",
    "name": "kotlin"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1daaadbdebcaf091fc481_Tech_ios_color.svg",
    "cat": "Mobile",
    "name": "ios"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a6b7899946240db764e0f4_Tech_flutter_color.svg",
    "cat": "Mobile",
    "name": "flutter"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1da311ed3b598a0ed8b79_Tech_dart_color.svg",
    "cat": "Mobile",
    "name": "dart"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1da0666b5c2be0b98d347_Tech_axpo_color.svg",
    "cat": "Mobile",
    "name": "axpo"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1d9f1ad461e50f09be9d6_Tech_android_color.svg",
    "cat": "Mobile",
    "name": "android"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1d903e8919b37e2770a4b_Tech_supabase_color.svg",
    "cat": "Database",
    "name": "supabase"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1d791fc1425b356fb3381_Tech_sqlite_color.svg",
    "cat": "Database",
    "name": "sqlite"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1d64c52ae6c91dc6ad71a_Tech_redis_color.svg",
    "cat": "Database",
    "name": "redis"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1d5db75569b371375d1ce_Tech_postgreSQL_color.svg",
    "cat": "Database",
    "name": "postgreSQL"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1d5b82b0ecfb5fc70b834_Tech_mysql_color.svg",
    "cat": "Database",
    "name": "mysql"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1d568ae116bd00635f9ad_Tech_mongodb_color.svg",
    "cat": "Database",
    "name": "mongodb"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1d5535c126a08090cde43_Tech_firebase_color.svg",
    "cat": "Database",
    "name": "firebase"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1d53c5c126a08090cd4fd_Tech_elastic_color.svg",
    "cat": "Database",
    "name": "elastic"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1d49af36435fea7f74e0e_Tech_restapi_color.svg",
    "cat": "Backend",
    "name": "restapi"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1d4783d238be01fc2090e_Tech_python_color.svg",
    "cat": "Backend",
    "name": "python"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1d45faa26de6158ff07c8_Tech_nodejs_color.svg",
    "cat": "Backend",
    "name": "nodejs"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1d44dc7d7a31f18137832_Tech_nest_color.svg",
    "cat": "Backend",
    "name": "nest"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1d431cbbf7b0da9333cc9_Tech_graphql_color.svg",
    "cat": "Backend",
    "name": "graphql"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1d41ae1318fe46f11b176_Tech_fastapi_color.svg",
    "cat": "Backend",
    "name": "fastapi"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1d4057feaaf2a1d41b922_Tech_express_color.svg",
    "cat": "Backend",
    "name": "express"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1d3d9152de6b9e53a4e69_Tech_djangorestframework_color.svg",
    "cat": "Backend",
    "name": "djangorestframework"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1d3bb779b6d486da82ae3_Tech_django_color.svg",
    "cat": "Backend",
    "name": "django"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1d3956bff4b364483e27a_Tech_celery_color.svg",
    "cat": "Backend",
    "name": "celery"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a1812f464a661c50707b84_Tech_vuejs_color.svg",
    "cat": "Frontend",
    "name": "vuejs"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a180fb2bc01359c80a26db_Tech_typescript_color.svg",
    "cat": "Frontend",
    "name": "typescript"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a17f83eae6cb490bc72eaa_Tech_angular_color.svg",
    "cat": "Frontend",
    "name": "angular"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a17fccc876cacab4d7b4fb_Tech_bootstrap_color.svg",
    "cat": "Frontend",
    "name": "bootstrap"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a6b7602d0ebb8dd46614f3_Tech_css_color.svg",
    "cat": "Frontend",
    "name": "css"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a18003856b05e6278d79f1_Tech_framer_color.svg",
    "cat": "Frontend",
    "name": "framer"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a18016e8340537dba3fd08_Tech_html_color.svg",
    "cat": "Frontend",
    "name": "html"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a18041b6968f6f4c5af0f4_Tech_javascript_color.svg",
    "cat": "Frontend",
    "name": "javascript"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69ae62ea3dfb49a872096056_Tech_nextjs_color.svg",
    "cat": "Frontend",
    "name": "nextjs"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69ae627e60521291d24b9fd8_Tech_nuxtjs_color.svg",
    "cat": "Frontend",
    "name": "nuxtjs"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a180ec6026242135e4b37e_Tech_tailwind_color.svg",
    "cat": "Frontend",
    "name": "tailwind"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a180d664cb13aec15066e2_Tech_storybook_color.svg",
    "cat": "Frontend",
    "name": "storybook"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a180b8ae1dbcd9fec6b98b_Tech_react_color.svg",
    "cat": "Frontend",
    "name": "react"
  },
  {
    "img": "https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a180a2478c619c12aafc0f_Tech_sass_color.svg",
    "cat": "Frontend",
    "name": "sass"
  }
];
