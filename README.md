# angular-corp

Network18 Website



Technology: 
	The stack used is
	Nginx server
	AngularJS framework (node, npm, bower)
	HTML/CSS & Jquery
	Gulp for deployment

File Structure:
	The files on server are kept at “/var/www/html/”. The entry point is index.html and app.js. All the other files are included via that.
	The js files need to be included in the index.html and the html has to be included in the js module while mentioning the route/url.

	The included files are:
		CSS files
		Bower components
		ModuleJS files

	The structure of the code is as follows
		>>	Images:  All the images files 
		>>	Script: All the JS and JSON files
		>>	View: HTML Files
		>>	Style: CSS files
		>>	Reports: All the reports. Previous websites’ folder structure has been  maintained. 
		>>	reports - Network18 reports pdf
		>>	reportstv - TV18 reports pdf
		>>	downloads - Same as before
		>>	commitee - Same as before
		>>	Bower_components: All the additional dependencies
		>>	Fonts: Font files

Updating Investor Sections

	The root folder is at /var/www/html/
	The files the that need to be updated as per the urls are as follows.

	URL							PAGE NAME									PAGE NAMEFILE PATH
	/finance					Financial Statements						/view/investor.html
	/shareholding				Shareholding Pattern						/view/shareholding.html
	/notice						Notices & Events							/view/notice.html
	/policy						Our Policies								/view/policy.html
	/merger						Scheme of Merger by Absorption				/view/merger.html
	/annualReport				Annual Reports								/view/annualReport.html
	/finance-subsidiary			Financial Statements of Subsidiaries		/view/finSubs.html


	Each page in this section is divided in two sections. 
		NW18 Section
		TV18 Section
	And each section is subdivided into different sub-sections depending upon the tabs/heading



Requirements to run on a Local Environment

	==> Steps to run on local server
	==> Download/clone
	==> Install node, npm, bower
	==> npm install
	==> Goto folder and run bower install
	==> In the same folder run npm run lite
	==> Open the url localhost:8080




