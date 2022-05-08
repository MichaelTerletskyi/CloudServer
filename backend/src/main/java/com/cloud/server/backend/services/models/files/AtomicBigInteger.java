package com.cloud.server.backend.services.models.files;

import java.math.BigInteger;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicReference;

/**
 * @Create 4/29/2021
 * @Author Michael Terletskyi
 */

public final class AtomicBigInteger {
    private final AtomicReference<BigInteger> bigInteger;

    public AtomicBigInteger(final BigInteger bigInteger) {
        this.bigInteger = new AtomicReference<>(Objects.requireNonNull(bigInteger));
    }

    public BigInteger incrementAndGet(BigInteger val) {
        return bigInteger.accumulateAndGet(val, BigInteger::add);
    }

    public BigInteger get() {
        return bigInteger.get();
    }
}