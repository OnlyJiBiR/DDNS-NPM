{"payload":{"allShortcutsEnabled":true,"fileTree":{"backend":{"items":[{"name":".vscode","path":"backend/.vscode","contentType":"directory"},{"name":"config","path":"backend/config","contentType":"directory"},{"name":"doc","path":"backend/doc","contentType":"directory"},{"name":"internal","path":"backend/internal","contentType":"directory"},{"name":"lib","path":"backend/lib","contentType":"directory"},{"name":"migrations","path":"backend/migrations","contentType":"directory"},{"name":"models","path":"backend/models","contentType":"directory"},{"name":"routes","path":"backend/routes","contentType":"directory"},{"name":"schema","path":"backend/schema","contentType":"directory"},{"name":"templates","path":"backend/templates","contentType":"directory"},{"name":".eslintrc.json","path":"backend/.eslintrc.json","contentType":"file"},{"name":".gitignore","path":"backend/.gitignore","contentType":"file"},{"name":".prettierrc","path":"backend/.prettierrc","contentType":"file"},{"name":"app.js","path":"backend/app.js","contentType":"file"},{"name":"db.js","path":"backend/db.js","contentType":"file"},{"name":"index.js","path":"backend/index.js","contentType":"file"},{"name":"knexfile.js","path":"backend/knexfile.js","contentType":"file"},{"name":"logger.js","path":"backend/logger.js","contentType":"file"},{"name":"migrate.js","path":"backend/migrate.js","contentType":"file"},{"name":"nodemon.json","path":"backend/nodemon.json","contentType":"file"},{"name":"package.json","path":"backend/package.json","contentType":"file"},{"name":"setup.js","path":"backend/setup.js","contentType":"file"},{"name":"yarn.lock","path":"backend/yarn.lock","contentType":"file"}],"totalCount":23},"":{"items":[{"name":".github","path":".github","contentType":"directory"},{"name":"backend","path":"backend","contentType":"directory"},{"name":"docker","path":"docker","contentType":"directory"},{"name":"docs","path":"docs","contentType":"directory"},{"name":"frontend","path":"frontend","contentType":"directory"},{"name":"global","path":"global","contentType":"directory"},{"name":"scripts","path":"scripts","contentType":"directory"},{"name":"test","path":"test","contentType":"directory"},{"name":".gitignore","path":".gitignore","contentType":"file"},{"name":".version","path":".version","contentType":"file"},{"name":"Jenkinsfile","path":"Jenkinsfile","contentType":"file"},{"name":"LICENSE","path":"LICENSE","contentType":"file"},{"name":"README.md","path":"README.md","contentType":"file"}],"totalCount":13}},"fileTreeProcessingTime":11.94751,"foldersToFetch":[],"reducedMotionEnabled":"system","repo":{"id":726626850,"defaultBranch":"develop","name":"nginx-proxy-manager","ownerLogin":"vari","currentUserCanPush":false,"isFork":true,"isEmpty":false,"createdAt":"2023-12-03T01:38:09.000+03:00","ownerAvatar":"https://avatars.githubusercontent.com/u/651665?v=4","public":true,"private":false,"isOrgOwned":false},"symbolsExpanded":true,"treeExpanded":true,"refInfo":{"name":"access-list-client-ddns-support","listCacheKey":"v0:1701562489.0","canEdit":true,"refType":"branch","currentOid":"bae32ee7cf2b910485be1e41a843535695b544df"},"path":"backend/index.js","currentUser":{"id":37180066,"login":"OnlyJiBiR","userEmail":"mr@jibir.cc"},"blob":{"rawLines":["#!/usr/bin/env node","","const logger = require('./logger').global;","","async function appStart () {","\tconst migrate             = require('./migrate');","\tconst setup               = require('./setup');","\tconst app                 = require('./app');","\tconst apiValidator        = require('./lib/validator/api');","\tconst internalCertificate = require('./internal/certificate');","\tconst internalIpRanges    = require('./internal/ip_ranges');","\tconst ddnsUpdater         = require('./lib/ddns_resolver/ddns_updater');","","\treturn migrate.latest()","\t\t.then(setup)","\t\t.then(() => {","\t\t\treturn apiValidator.loadSchemas;","\t\t})","\t\t.then(internalIpRanges.fetch)","\t\t.then(() => {","","\t\t\tinternalCertificate.initTimer();","\t\t\tinternalIpRanges.initTimer();","\t\t\tddnsUpdater.initTimer();","","\t\t\tconst server = app.listen(3000, () => {","\t\t\t\tlogger.info('Backend PID ' + process.pid + ' listening on port 3000 ...');","","\t\t\t\tprocess.on('SIGTERM', () => {","\t\t\t\t\tlogger.info('PID ' + process.pid + ' received SIGTERM');","\t\t\t\t\tserver.close(() => {","\t\t\t\t\t\tlogger.info('Stopping.');","\t\t\t\t\t\tprocess.exit(0);","\t\t\t\t\t});","\t\t\t\t});","\t\t\t});","\t\t})","\t\t.catch((err) => {","\t\t\tlogger.error(err.message);","\t\t\tsetTimeout(appStart, 1000);","\t\t});","}","","try {","\tappStart();","} catch (err) {","\tlogger.error(err.message, err);","\tprocess.exit(1);","}"],"stylingDirectives":[[],[],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":22,"cssClass":"pl-en"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":33,"cssClass":"pl-s"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":41,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":14,"cssClass":"pl-k"},{"start":15,"end":23,"cssClass":"pl-en"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-k"},{"start":7,"end":14,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":36,"cssClass":"pl-en"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":48,"cssClass":"pl-s"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":50,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-k"},{"start":7,"end":12,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":36,"cssClass":"pl-en"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":46,"cssClass":"pl-s"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":48,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-k"},{"start":7,"end":10,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":36,"cssClass":"pl-en"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":44,"cssClass":"pl-s"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":46,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-k"},{"start":7,"end":19,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":36,"cssClass":"pl-en"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":58,"cssClass":"pl-s"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":59,"end":60,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-k"},{"start":7,"end":26,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":36,"cssClass":"pl-en"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":61,"cssClass":"pl-s"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":62,"end":63,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-k"},{"start":7,"end":23,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":36,"cssClass":"pl-en"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":59,"cssClass":"pl-s"},{"start":59,"end":60,"cssClass":"pl-kos"},{"start":60,"end":61,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-k"},{"start":7,"end":18,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":36,"cssClass":"pl-en"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":71,"cssClass":"pl-s"},{"start":71,"end":72,"cssClass":"pl-kos"},{"start":72,"end":73,"cssClass":"pl-kos"}],[],[{"start":1,"end":7,"cssClass":"pl-k"},{"start":8,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":22,"cssClass":"pl-en"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":7,"cssClass":"pl-en"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":7,"cssClass":"pl-en"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":11,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":3,"end":9,"cssClass":"pl-k"},{"start":10,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":34,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":7,"cssClass":"pl-en"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":7,"cssClass":"pl-en"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":11,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-kos"}],[],[{"start":3,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":32,"cssClass":"pl-en"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":3,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":29,"cssClass":"pl-en"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":3,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":24,"cssClass":"pl-en"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-kos"}],[],[{"start":3,"end":8,"cssClass":"pl-k"},{"start":9,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":33,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":38,"end":40,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":15,"cssClass":"pl-en"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":30,"cssClass":"pl-s"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":33,"end":40,"cssClass":"pl-s1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":44,"cssClass":"pl-c1"},{"start":45,"end":46,"cssClass":"pl-c1"},{"start":47,"end":76,"cssClass":"pl-s"},{"start":76,"end":77,"cssClass":"pl-kos"},{"start":77,"end":78,"cssClass":"pl-kos"}],[],[{"start":4,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":14,"cssClass":"pl-en"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":24,"cssClass":"pl-s"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":29,"end":31,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":5,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":16,"cssClass":"pl-en"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":23,"cssClass":"pl-s"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":26,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":37,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-c1"},{"start":40,"end":59,"cssClass":"pl-s"},{"start":59,"end":60,"cssClass":"pl-kos"},{"start":60,"end":61,"cssClass":"pl-kos"}],[{"start":5,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":17,"cssClass":"pl-en"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":21,"end":23,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":6,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":17,"cssClass":"pl-en"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":29,"cssClass":"pl-s"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":6,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":18,"cssClass":"pl-en"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":7,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":8,"cssClass":"pl-en"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":15,"end":17,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":3,"end":9,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":15,"cssClass":"pl-en"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":27,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":3,"end":13,"cssClass":"pl-en"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":28,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":1,"end":9,"cssClass":"pl-en"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":1,"end":7,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":13,"cssClass":"pl-en"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":30,"cssClass":"pl-s1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":1,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":13,"cssClass":"pl-en"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[]],"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":false,"configFilePath":null,"networkDependabotPath":"/vari/nginx-proxy-manager/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":false,"repoAlertsPath":"/vari/nginx-proxy-manager/security/dependabot","repoSecurityAndAnalysisPath":"/vari/nginx-proxy-manager/settings/security_analysis","repoOwnerIsOrg":false,"currentUserCanAdminRepo":false},"displayName":"index.js","displayUrl":"https://github.com/vari/nginx-proxy-manager/blob/access-list-client-ddns-support/backend/index.js?raw=true","headerInfo":{"blobSize":"1.23 KB","deleteInfo":{"deleteTooltip":"Fork this repository and delete the file"},"editInfo":{"editTooltip":"Fork this repository and edit the file"},"ghDesktopPath":"https://desktop.github.com","gitLfsPath":null,"onBranch":true,"shortPath":"7c75433","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2Fvari%2Fnginx-proxy-manager%2Fblob%2Faccess-list-client-ddns-support%2Fbackend%2Findex.js","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":"50","truncatedSloc":"42"},"mode":"file"},"image":false,"isCodeownersFile":null,"isPlain":false,"isValidLegacyIssueTemplate":false,"issueTemplateHelpUrl":"https://docs.github.com/articles/about-issue-and-pull-request-templates","issueTemplate":null,"discussionTemplate":null,"language":"JavaScript","languageID":183,"large":false,"loggedIn":true,"newDiscussionPath":"/vari/nginx-proxy-manager/discussions/new","newIssuePath":"/vari/nginx-proxy-manager/issues/new","planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/vari/nginx-proxy-manager/blob/access-list-client-ddns-support/backend/index.js","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","dismissStackNoticePath":"/settings/dismiss-notice/publish_stack_from_file","releasePath":"/vari/nginx-proxy-manager/releases/new?marketplace=true","showPublishActionBanner":false,"showPublishStackBanner":false},"rawBlobUrl":"https://github.com/vari/nginx-proxy-manager/raw/access-list-client-ddns-support/backend/index.js","renderImageOrRaw":false,"richText":null,"renderedFileInfo":null,"shortPath":null,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"repoOwner":"vari","repoName":"nginx-proxy-manager","showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","showDependabotConfigurationBanner":false,"actionsOnboardingTip":null},"truncated":false,"viewable":true,"workflowRedirectUrl":null,"symbols":{"timed_out":false,"not_analyzed":false,"symbols":[{"name":"appStart","kind":"function","ident_start":80,"ident_end":88,"extent_start":65,"extent_end":1164,"fully_qualified_name":"appStart","ident_utf16":{"start":{"line_number":4,"utf16_col":15},"end":{"line_number":4,"utf16_col":23}},"extent_utf16":{"start":{"line_number":4,"utf16_col":0},"end":{"line_number":41,"utf16_col":1}}}]}},"copilotInfo":{"documentationUrl":"https://docs.github.com/copilot/overview-of-github-copilot/about-github-copilot-for-individuals","notices":{"codeViewPopover":{"dismissed":false,"dismissPath":"/settings/dismiss-notice/code_view_copilot_popover"}},"userAccess":{"accessAllowed":false,"hasSubscriptionEnded":false,"orgHasCFBAccess":false,"userHasCFIAccess":false,"userHasOrgs":false,"userIsOrgAdmin":false,"userIsOrgMember":false,"business":null,"featureRequestInfo":null}},"copilotAccessAllowed":false,"csrf_tokens":{"/vari/nginx-proxy-manager/branches":{"post":"KE8mgcPBmDokILpeiXr7HWJ8YTsCe0k-cif0VppJ8Gz0UkmG3-7KW8x86B62H_HIrVnnolpQAj6h2ZKe3veH1w"},"/repos/preferences":{"post":"ZfbaC-YY1tnrMjilPVUaPnsFVDnDJS-Rm99x9yYtkwVVXE3qUhWIrvKBd8uDQ-Zu_WrWMwEBGU97K_XfdyWyJA"}}},"title":"nginx-proxy-manager/backend/index.js at access-list-client-ddns-support · vari/nginx-proxy-manager"}