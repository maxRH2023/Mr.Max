/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import {VideoStyle} from '../types';

interface StyleSelectorProps {
  selectedStyle: VideoStyle;
  onSelectStyle: (style: VideoStyle) => void;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({
  selectedStyle,
  onSelectStyle,
}) => {
  return (
    <div>
      <label className="text-xs block mb-2 font-medium text-gray-400">
        Visual Style
      </label>
      <div className="flex flex-wrap gap-2">
        {Object.values(VideoStyle).map((style) => (
          <button
            key={style}
            type="button"
            onClick={() => onSelectStyle(style)}
            className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
              selectedStyle === style
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-700/60 hover:bg-gray-700 text-gray-300'
            }`}>
            {style}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;
