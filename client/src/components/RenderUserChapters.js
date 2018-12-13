import React from 'react';
import ViewOneChapter from './ViewOneChapter.js';

export default function RenderUserChapters(props){
	const chapters = props.chapters;
    return(
      <div>
        <h1>Chapters</h1>
				{chapters.map(chapter => (
					<ViewOneChapter
						key={chapter.id}
						body={chapter.body}
					/>
				))}
      </div>
		)
};
