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
	function sequence(subject){
		var seq = [];
		
		var speltNumber;
		var filteredSpeltNumber;
		var wordLength;
		var currentNumber = subject;
		while (true){
			speltNumber = numerousness.numbers.spell(currentNumber, {digits: false, includeAnd: false}); // Spell the number out in words.
			filteredSpeltNumber = speltNumber.replace(/[^a-z]/g, ''); // Remove all non-alpha characters (spaces, commas and hyphens).
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
		
		$('#results').empty();
		
		var seq = sequence($('#subject-input').val());
		for (var i = 0; i < seq.length; ++i){
			$('#results').append($('<p><strong>' + seq[i].number + '</strong> - ' + seq[i].words + ' (' + seq[i].len + ' letters)</p>'));
		}
	};
	
	$('#input-form').on('submit', onFormSubmit);
});