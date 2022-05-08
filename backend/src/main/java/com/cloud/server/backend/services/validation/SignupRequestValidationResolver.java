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
    private static final String USERNAME_LENGTH_MSG = "Username should contain from 2 to 32 characters";
    private static final String EMAIL_LENGTH_MSG = "Email should contain from 3 to 254 characters";
    private static final String EMAIL_INVALID_MSG = "E-mail address is not a valid";
    private static final String PASSWORD_LENGTH_MSG = "Username should contain from 8 to 32 characters";
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
                    addViolationMessages(msg);
                }
            }
        }
    }

    private void addViolationMessages(String msg) {
        if (msg.contains("username does not have between"))
            this.violationMessages.add(USERNAME_LENGTH_MSG);
        if (msg.contains("email does not have between"))
            this.violationMessages.add(EMAIL_LENGTH_MSG);
        if (msg.contains("email is not a valid e-mail address"))
            this.violationMessages.add(EMAIL_INVALID_MSG);
        if (msg.contains("password does not have between"))
            this.violationMessages.add(PASSWORD_LENGTH_MSG);
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
