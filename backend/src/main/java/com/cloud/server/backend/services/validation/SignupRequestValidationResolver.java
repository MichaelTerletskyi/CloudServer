package com.cloud.server.backend.services.validation;

import com.cloud.server.backend.payload.request.SignupRequest;
import net.sf.oval.ConstraintViolation;
import net.sf.oval.Validator;
import org.apache.commons.lang3.StringUtils;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.StringJoiner;

public class SignupRequestValidationResolver {
    private Set<String> violationMessages = new HashSet<>();
    private boolean isValid;

    public SignupRequestValidationResolver(SignupRequest signupRequest) {
        Validator validator = new Validator();
        List<ConstraintViolation> errors = validator.validate(signupRequest);
        this.isValid = errors.isEmpty();
        if (!errors.isEmpty()) {
            for (ConstraintViolation constraintViolation : errors) {
                String msg = constraintViolation.getMessage();
                if (StringUtils.isNotBlank(msg)) {
                    this.violationMessages.add(msg);
                }
            }
        }
    }
    
    public boolean isValid() {
        return this.isValid;
    }

    public Set<String> getViolationMessages() {
        return this.violationMessages;
    }

    @Override
    public String toString() {
        StringJoiner stringJoiner = new StringJoiner(", \n");
        this.violationMessages.forEach(stringJoiner::add);
        return stringJoiner.toString();
    }
}
