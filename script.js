//your JS code here. If required.
 // Get browser information
        const browserName = navigator.appName;
        const browserVersion = navigator.appVersion;

        // Display browser information in the specified format
        const browserInfo = `You are using ${browserName} version ${browserVersion}`;
        document.getElementById('browser-info').textContent = browserInfo;