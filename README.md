# Youtube Transcript Summarizer

The Youtube Transcript Summarizer is a Chrome extension that allows users to summarize YouTube video transcripts easily. This extension provides options to extract the video transcript, perform text summarization using different services, and display the summarized text.

## Installation

To install the Youtube Transcript Summarizer Chrome extension, follow these steps:

1. Clone this repository to your local machine or download the files as a zip archive.
2. Open Google Chrome browser and go to the "Extensions" page by typing `chrome://extensions/` in the address bar.
3. Enable the "Developer mode" toggle located at the top right corner of the Extensions page.
4. Click on the "Load unpacked" button and select the directory where you have cloned or extracted the extension files.

The Youtube Transcript Summarizer extension will now be installed and ready to use.

## Files

The following files are included in this repository:

1. **popup.html**: This file contains the HTML code for the extension's popup interface, which is displayed when the extension icon is clicked.

2. **popup.js**: This file contains the JavaScript code for the functionality of the popup interface. It handles user interactions and communicates with the background script.

3. **popup.css**: This file contains the CSS styles used to format the popup interface.

4. **icons**: This folder contains images used as icons for the extension.

5. **content.js**: This file is a content script that interacts with specific websites to retrieve and process data for text summarization. It is executed in the context of web pages when needed.

6. **background.js**: This file is the background script of the extension. It handles various functionalities, such as requesting and processing subtitles, saving data to local storage, and providing a context menu option.

7. **manifest.json**: This file is a manifest file that defines the extension's properties and permissions.

## Usage

1. Click on the extension icon to open the popup interface.
2. Use the available options to choose the desired summarizer service.
3. Click the "Update" button to fetch the video transcript and summarize it based on the selected service.
4. The summarized text will be displayed on the popup interface.
5. You can click on the "Show" button to open the summarized text in the selected summarizer service's website.

## Resetting Settings

The extension provides a context menu option to reset settings to default. To access this option, right-click on the extension icon, and select "Reset to default." This will restore the default settings of the extension.

## Disclaimer

This extension is intended for personal use and is not affiliated with any third-party services used for text summarization. The extension's functionality may be subject to changes based on updates to YouTube or other external services.


## Contributing

Contributions to the Youtube Transcript Summarizer extension are welcome. If you find any issues or have suggestions for improvements, please feel free to create a pull request or open an issue.

## Contact

For any queries or feedback, you can contact the author of this extension by email: [demo@example.com](mailto:demo@example.com).
