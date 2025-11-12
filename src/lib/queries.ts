export const homePageQuery = `*[_type == "homePage"][0]{
  hero,
  benefits[]->,
  sportsSection,
  militarySection,
  ctaSections[]
}`

export const benefitsQuery = `*[_type == "benefit"]{
  _id,
  title,
  icon,
  description
}`

export const teamsQuery = `*[_type == "team"]{
  _id,
  name,
  logo,
  category
}`
