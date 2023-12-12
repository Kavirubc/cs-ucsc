import React from 'react';
import ReactMarkdown from 'react-markdown';

const Page = () => {
    const markdownText = `
# My Blog Post

![Heading Image](path/to/heading-image.jpg)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mauris nec nunc luctus tincidunt. Donec auctor, nunc id tincidunt tincidunt, nisl mauris lacinia nunc, id lacinia nunc nisl id tellus. Sed euismod, mauris ut lacinia tincidunt, nunc elit aliquam nunc, id aliquam nunc nisl id tellus.

## Subheading

- List item 1
- List item 2
- List item 3

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mauris nec nunc luctus tincidunt. Donec auctor, nunc id tincidunt tincidunt, nisl mauris lacinia nunc, id lacinia nunc nisl id tellus. Sed euismod, mauris ut lacinia tincidunt, nunc elit aliquam nunc, id aliquam nunc nisl id tellus.
`;

    return (
        <div>
            <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
    );
};

export default Page;
