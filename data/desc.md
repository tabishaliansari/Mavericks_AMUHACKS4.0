# Fetching data from EurorePMC API

This python script deals with fetching the articles and research paper data from EuropePMC API.  
The data is fetched in json format.
{  
&nbsp;"id": "", 
&nbsp;"pmid": "",  
&nbsp;"doi": "",  
&nbsp;"title": "",  
&nbsp;"abstract": "",  
&nbsp;"journal": "",  
&nbsp;"year": ""  
}`



url = "https://www.ebi.ac.uk/europepmc/webservices/rest/search"
params = {
"query": query,
"resultType": "core",
"pageSize": 100,
"format": "json",
}