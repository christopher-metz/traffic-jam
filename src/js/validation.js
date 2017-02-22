import React from 'react';
import validator from 'validator';
import Validation from 'react-validation';

Object.assign(Validation.rules, {
    required: {
        rule: value => value.toString().trim(),
        hint: () => <span className="form-error is-visible">Required</span>
    },

    alpha: {
        rule: value => validator.isAlpha(value),
        hint: () => (
            <span className="form-error is-visible">
                String should contain only letters (a-zA-Z).
            </span>
        )
    }
});
