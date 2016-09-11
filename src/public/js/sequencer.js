/**
 * Copyright 2016 David Prior  |  http://davecheesefish.com  |  https://github.com/davecheesefish
 * Uses Numerousness.js, Copyright 2015 David Prior
 * 
 * Checks lengths of number-word chains in the English language, as explained in Matt Parker's
 * video: https://www.youtube.com/watch?v=LYKn0yUTIU4
 * 
 * Note: Can't reliably deal with numbers over 10^18, due to loss of precision.
**/
'use strict';

$(document).ready(function(){
	/**
	 * Calculates the sequence for the given subject number.
	 */
	function sequence(subject, includeAnd, includePunctuation){
		var seq = [];
		
		var speltNumber;
		var filteredSpeltNumber;
		var wordLength;
		var currentNumber = subject;
		while (true){
			speltNumber = numerousness.numbers.spell(currentNumber, {digits: false, includeAnd: includeAnd}); // Spell the number out in words.
			if (includePunctuation){
				// Punctuation included: No filtering needed.
				filteredSpeltNumber = speltNumber;
			} else {
				// Punctuation omitted: Remove all non-alpha characters.
				filteredSpeltNumber = speltNumber.replace(/[^a-z]/g, ''); // Remove all non-alpha characters (spaces, commas and hyphens).
			}
			wordLength = filteredSpeltNumber.length; // Get the number of letters.
			
			seq.push({
				number: currentNumber,
				words: speltNumber,
				len: wordLength
			});
			
			// 4 is always the end point for the sequence in English, so end if we hit it.
			if (currentNumber == 4){
				break;
			}
			
			// If it's not 4, set the new number to the length and keep going.
			currentNumber = wordLength;
		}
		
		return seq;
	}
	
	function onFormSubmit(e){
		e.preventDefault();
		
		var start = +$('#subject-start').val();
		var end = +$('#subject-end').val();
		var includeAnd = !!($('#include-and').prop('checked'));
		var includePunctuation = !!($('#include-punctuation').prop('checked'));
		
		// Make sure the range makes sense.
		if (end < start){
			alert('End of range cannot be smaller than the start.');
			return;
		}
		
		var $results = $('#results');
		var $resultsSectionNode = $('<section class="results-section"><h2></h2></section>');
		var resultsSections = {}; // Map containing references to all sections, keyed by sequence length.
		
		// Clear the results area.
		$results.empty();
		
		// Sequence all numbers between start and end.
		var seq, $section, $sequence;
		for (var currentSubject = start; currentSubject <= end; ++currentSubject){
			// Get sequence for the current subject.
			seq = sequence(currentSubject, includeAnd, includePunctuation);
			
			// Find appropriate results section to append to.
			if (resultsSections[seq.length] !== undefined){
				$section = resultsSections[seq.length];
			} else {
				// No section exists, create one.
				$section = $resultsSectionNode.clone();
				$('h2', $section).text('Sequence length ' + seq.length);
				
				// Find the correct section to insert after (to maintain length order).
				var prevSection = 0;
				for (var sectionNo in resultsSections){
					if (sectionNo < seq.length && seq.length - sectionNo < seq.length - prevSection){
						prevSection = sectionNo;
					}
				}
				if (prevSection == 0){
					// No previous section, insert at beginning.
					$results.prepend($section);
				} else {
					$section.insertAfter(resultsSections[prevSection]);
				}
				
				resultsSections[seq.length] = $section;
			}
			
			// Insert the sequence into the DOM.
			$sequence = $('<div class="sequence"><h3></h3><ol></ol></div>');
			$('h3', $sequence).text(currentSubject);
			
			for (var i = 0; i < seq.length; ++i){
				$('ol', $sequence).append($('<li><strong>' + seq[i].number + '</strong> - ' + seq[i].words + ' (' + seq[i].len + ' ' + (includePunctuation ? 'characters' : 'letters') + ')</li>'));
			}
			$section.append($sequence);
		}
	};
	
	$('#input-form').on('submit', onFormSubmit);
});