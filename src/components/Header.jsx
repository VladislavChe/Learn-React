import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ8AAAC6CAMAAACHgTh+AAAAilBMVEX////tArXsALLsAK/sAK7+9vz97/n84vT84PP/+/7++P370+76zOv71e/97Pj85PX5x+n2pt3ycszzgND5wuf2ndruIrn72vHzeM7zftD5vub0jNT4uOT1ktbvNLz1mtnya8r3seHvQ7/wU8PxYMfxZMjvP7/3q9/4s+L0iNPxWMXwS8HuL7v2odojfdV/AAAQ90lEQVR4nO1dh5bqug6d2JSh99AhA4fO/P/vXQKWXBPbA4FwF3ut9+4ckji2Ykuymr++Pvjggw8++OCDDz744IO/oFIqFl/dh7vQGESLgJBg1R3Uq3e1NOx0F4TGOI9mlQd177mozgN6ocUVhBC6XZb/2FK/S7CluC06Kj20p09Bh+IIYCD03PGfJa0DIXpLgwx6nClONDCA0K7fJKmtNbLeGjpl1O9sUA2No7hS5Dh0bqa+NVL12s45w+4/HOckclwp8q/p1EjZPMegmVXGY3gg/qWQ40qRsV1EVEZp1Ihb6T1hJA/BDEdykQUX0lCqckRC9pY29sojcUvb43FFOD8p1J4ymrtRwR7TY/+qQJXqy5XCF+kqbdGU5KVyIcJowu4fdvFS+ITBPABzGDmpC78WfxSS0E5iC3vpTkIjsaGvOhCE7LIawkMBY6HfyoXWWBonPSVo3//EyUHIUlVaang9i+4/Gh02ZjrTr1WnIkUIaRueHwbSLb+GW5bwiv6jO58BzmwoZo2p2hMpQg/aDZ2CuFKm5neE7PrxkR3PBi02mWmS2tVcC8uBrJTFEAkX6TqJ505ggty3S3wGBqyri+RbJsKKIIHIZYoL4QqZJDcB9xjWZM5wYj1N5f1dcRbwYbcEQtFNms7GZBjpPqrbmQGWS/qWvC2oW4Ul+7EuUin9yw/h1gf1OjNAR23brepamAqj608zzknJwmbhAAbithV6HX7YRLZvLgbC8P9d/v1bUAmUhoi9J+8Sd8r6adufXFATeOfqa84XC3V4+Je9J++GIba1TZS2IorcLEBEkePybP1NGCrTxqibIdxgGCCh06NNNp3ybicDA7Lj7QfVyOFsCHwTAcO66bwVF9XzmByR64PAa/7Uy6ehyOjhbsybiDOEjp2fW7An8u2MgWXtsdFqCJx07v7YmtEj364Ytptzn/ZfXzuBHhv3xzZMkLW8+/hM+NNjIjIQD/EZ/T/pUZMFTJLBQ8f/kx4tVd5SV5voe9AD+Ok/t9uLgYZC3f5YjPegh6e8RYWdHLmTwm2ER3Z3zje4jtv9G46cHF8/fOU4qRTM7uS4MXgZYIQu9x6QHPF0wg0u2bo8DBulu3qbPQL3bs4UR1sXyeMideHeu3qbPVaMHna18Zt7edmcP6Eny0HIvMl+LnK1f1SQXXA/Xog/WR8veW+UXoODqx1vBZOhwG8tcfuQzbEy9N8YvATMW0mSndU3IC+lS+HXBijvVjNIn73HWZ99EaCflo17H4WJvIXb4e+WgYL9NO8u/rKTHY8vDFVRQSFj0VNHjB4mj3iuQF3k4EIVLaZLqSwE5Fi+1fUvlBGpAreXMgmKqIWkTjHwR93b3cwR2SdyG5mEyXtSS73K0PTaF7wSzL9Plol3VJF5hPX9rjOYXzCdTuP/DDq7ffsIlwtqgBEHsO28u1/QUWS2oJaG7d1yGyCICfxyuNz1h8aFxyKEjNFD+ULRyFBb/U7vGNI48jI9NlVGnAdAaXjsddoy42RziDgaS14JNhTKAtVbk/km9KWDkS5htOwDVYCd5ny3H6OLHu3y/rC6lxIqVchpOmmimfEdIlBZxEMQEi0s+UFUoQFjQcQeF/F6NFUTcXZ4g/Cx0n7jOCmMskWXMalNRP1cuyubv1vHNUIWp83ocNE39rNJu35BLf6/9mS23w3mh9HmtLC3caUpPe5zGnNZ+l2Yc5lgNlC+kAoNe3NCvFAqTyZ0ncNlM1kXErocUyI4XTWINfzkkroCcd8Xnbzc7oxPJJkqhHZzlftRmpp7Gs+J7XhXY1oC91w7tQp6LHj9i/XOaKHn0jCKhJ28sJLhJmGdhOO9FHwMK4DaV0sMFFTSpn6464bGtxHSy4Nvqq5m+giQ7wTBY7OdISD0O1AcMt3EZRO92hxS0zMgL1MXvqu0qHn0sXPrkCqhBGCiQcCQ4rt55RxprVVqELr9LaPKLmVzwC3U3cQ3RPOyyBsguSH4asxDlSSkMHqZ/O0pnSF01SnJPeaAHB7i6Pq/vcG0xCKR2mWNJIS+xgjQD4jcjWCJcxWC+vmCQXXCb0sKrRd4WndFbXzYU3MxQ/eU50ehslEyIDeiKWKjeR2QmdocMzIw+pD74WaGyTfbypOk8Ozc3IY0OQiZylYsWDBoFEKjqK/B8wTTCrNkmFKn6HTDSM7JDJ8qaQZSEJzB8AtGMvBFoqRwUz04mqpUgoWntVSS2Rn98XzTHRDXioka3CjEmOce6BOZmiu2O9PD9LdvtJSCYxMM1APDcoF2pHxWh6SRB2ElvrVnVJNB2WDcE+82MNPOgrJNPj0PDLKSyM9CaqUxdLcppu6S9V8H6AeheANdJS1T6NNV9qGs1afSUpINpgRTnFvX790AQifoXTWh0oZboNG9EMmRvEanYDW8/F1N1EzLWp0QEmg7VTCFFGLag66eHPchJBY9gyAYxHN5W4pPsiWwvTFYw9UE0omc3MCGrUpkmBLBmisfaflXApGzLyMzxncZcqtFgMk34iJC/VozEzkuDaurCnSXiwbWUQW5ETyd1Xnv+Edg3IYtIfRrjx5nmOKqhKyZyXGZIco8QoIukJtahsmzarQ5+VAIpT2sBin4kiP4Q/FgVlXWIcwQhVke1La00hEq2nyGZLm9G6Hws+8QcC8GjyiiKEoxiSrLHj9DgkHEAB4lEHmMzxPcYuXgNy3LtgDVd/SdtFqu7Ss2gYFMOxe/C84Q61z6O3C6Ou2oV/IQFWGU7qZRxakyf1xe/wuiyCPJyBNAcjcp1pc0LWXHWZVnjzZBlMW1k9pySyuD6PjMnN5YdcPRJicNUOnULHV66IEdaW0lACMvsopBHHsG5QirnqjKythCD9WKJtDP+f0QG5zVgoEUT9c9e4WvCe2TyszFALUx7mRwZpCYfOV4vy+8Y/owjlCbHgqD1KG9hOfpuuvgSW09CN5BKGg01cNMbUERep4xbOuIu2sy45whb3pwPUq7ZIsC0OkBJjaPkh8Z08N7+i2RHlr0pYUc+ks4Q3U3wWYctAulkpwdSoJMSGgrEdokFPipa1Dh0HtC+wFqv7gm5/8I9FAnyMEibyPlflFfcWWoXU/9wBdoFHV095zFASrX2hZ6qJY38aKjwAVxm12UGY9QcYGUiq7p2On0UFngj6Svu31wiB/JriQGVPJ0y0qSi+EQpVepC0ZbLunUSu9sdiYy3IS5WJ1Kyn5fUcmKaRqIGsn/q+z3k5MFEKi/ZZnBjaVe7eYxfi88Ukq/Lo5XdSWp9iD7hp/nlGTqyuWjsxIE7oRCdNqqF9mtAuVOcF4QdOTY5ie382aboNvghlqLmgjWD1qFfBbVplFKmiCq/MCVd8YIRUvaLbcnu5aL+Cu4t4emL2KwxqwxEVvzH36bCaLpW2igb+MySM+b46XKqUdFor+BSw2appehG77PLcfaQJuBThGilafDxPZ4UsBdKVyhKZS98wlG+iO2/G26bxEhuuFxvuuKc6RKGbrWZCmYSq5qIEiaZI7aEfyVT8lmF2rYJtcLk9zw6HrQLXc1MVyT0LO+NwLWeNNJQOQncdTWVmjuScn94isDc79gK3UT/nzfb1AVh4db+hSlwdg035D2N3kdIV8yoNIT4x2eVm1a1DzpyrSbAe2TfSF0u5pjVIqN/qTfMHvHUcQynRg3UYbbf8XgiefFwyhlGOlGZ/YwCHDDY4iur3OIm9jgF/i35gPaSdy58NTM/r60V6MbZZj4EWF9oLroG5GBcYm44YUJI28qKwM5sCbIzitnRGkhvZ6uJVkK1QYi/AXjBP3C3OpcFQOA01ScaspJCAF9QZ7yUqksFwqHQ8FH5dICXb8mlpoMXGeCjwMiS1DVmikpBSR4SdWH1krZwdKI9aNtUBJwD+Lz6ZCZRsKP4Lu8aTO1kRqdbAnUyRAzrSukF68boyMPJ5K7v4DHE4hKWpHr7PVeoAb00/Urcz7mWn4BJd02/C1NW+5Qcm4dmI4iS2BTt9UTPujixRnsRTXJId6BwB/yrbjxd53PswQ9P9EXThc5KBdT0inCoJx3w1Mc3OzRqNXKDuPWZGR8H6GnnFQ3qC4N+9TrQIJ/ywlfzrjHc3OIbDQO/D2ZHhOy4AntPlnjSIWacIHdjPcli+5yMoznCmZMutij2wK/KTZmyyhMyK2MiRH+5i0ruXXQuZtEFbLYbOCHgsOKwacXi9S6IZcrI9+sieeg3U3PvBeuhaPD/HcX56rXGt/f5XK5VS5/fw8btXp/tu8sp+MoxboqEyPK85EWbVU7ShkIZDWI8K1oMMqBQLFg4jiUR+ANztPCQO3H1YVRQDijyn/5Mb63ne+i4IHFcoAUNBzthlj17fmJlN6ATxfrHcXabry6Fma4kyw3CXXq/TRu22Nmkc19OUdjva1S7We+iY8D92CUSIYrIbbRfN8QtV2msr9BASG21zd4Pqrl+n7Qi07qeJOL5ZCot9zXywZVC2I78l+vDyrHJXvvsGJjEO7m80NvNOp2u9Hlf6NRbzpf7ngSRUogS8ahYY8DpGanKAa8GKxx+ePsSHOuQehg7hkqfNu0ep84A0x1hHiCXtprIBY7h6WDJGCMdupdqIzr2UvzNFpx7KzLMh8Ax1x6LjC3Lqv+hzaW/Ej3zNc0C34+wbR1mw0MjYeKeRljQmyps2BcekrK8R0YOCpKmO8hH6PNF5ItZM6pTvPrAdq61XSHTnExguef6UczQGPPS5WtBMCxLFajP9dCeAAgP+LDbkBbqw/nE2fnz9bg3ix2M2cqDhHZLIgq7wqINXyHg9fiv50tPeQEcnj6YNf78gCflAJUy66RdjzckJatj3LGnW+FDHa3bikIqIpepG6FH3bilHK/e4sdv+d5jZwGU04btyM7mBnOs17Vs1H2O5ZFOPAF/3AMkQQLSL4rsMMxNa52mqEcMoG81Y7JW2xgmBB1D6Jvq2UNXP1sQI98H6DtTQ8udW8POqtX/8/18iXnfTgdJX7De/DTbz9+egUvpe2TqwIHVTmcTf9CMHnrE0cvFgKx5EyIYNPKmgnzWvifn70WyGEtWiUANtK5Kqytw7OkQkUKY40JEjk+CfvbV1dMtgCG5Xa3IQHGtYQavCjn9o+Tz2fjJaZ5EF5AQpcj093s1q8HLGuXIBWhimrhZyTQxoEnNPw2Si8DnBvokLcm1OYs7OPq1PyfdqUT3pP38xrhOC0rF/gWWMet3JgQEJ+amncFHCCVb3HL87lsfG4p7FtAK93z30hgCZFLyQrKF5i2mW63aoopZ5x/Cvw1MFSGFQBBWfk/QAq2I2kOuoGY5SauLFH+plZRh9IsL0tlcAYW9E2UuGJJX1UhrUi1mcdJiw5Scj1yJV4G+LwJW5jmUcq90/ihlCGZZB2FDIe8ax8xIIfHeG5FsysGMZOzwdwxEelFQpMAgVtybhy7AQt76LadhnxyDjVv7+XUPBpqO/oW+n7zFrRuBC9NKGUclDpn+UiBINFHO5eMiIRMJYfMEC3x+eemMXjlFzpmFKnUluoxQoU0E9pQrkNOaDivs7nQ4gzGLzXxdeAVBQglq3//ToGWqEFCi2RQE9HiQ8rWUbQW8uWeeULDfThJ60KPOCUOVuDmSS8wJKcc530rx1HRRiLP/p4TH2xrxfsl5F815SglJJBdqTFy3nP8pDQTvMHRtxzFs3kkhBy8dmAz7cAs1s7iLUStgIN+fiOhW38WWDec9kcK7yFpJcSqKDcCXuTDdvC32Kbqz1rMGyE5OHbvb6jMRudbGlh4nLfvmeCV+vwY3JoKop+34hwqiqXSo/pfarVyb/754IMPPvjggw8++OCDR+I/ujnFWHcUaxwAAAAASUVORK5CYII="
        alt=""
      />
    </header>
  );
};

export default Header;
