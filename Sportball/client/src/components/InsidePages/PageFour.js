import React from "react";
import "../InsidePages/insidePages_cssFiels/PageFour.css";


const PageFour = () => {
  return (
      <html>
      <section className="container recipes-section">
          <h2 className="section-header">Today's Recipes</h2>
      <div className="recipes">

          <div id="card-container">
              <div id="card-title">Quinoa porridge</div>
              <div id="Quinoa"></div>
              <div id="details">Prep time: <span className="detail-value">10 minutes</span> | Cook time: <span
                  className="detail-value">25 minutes</span> | Yield: <span className="detail-value">Serves 4</span>
              </div>
              <div id="card-items">
                  <span className="card-item-title">Ingredients</span>
                  <ul className="checkmark">
                      <li>175g quinoa</li>
                      <li>½ vanilla pod , split and seeds scraped out, or 0.5 tsp vanilla extract</li>
                      <li>15g creamed coconut</li>
                      <li>4 tbsp chia seeds</li>
                      <li>125g coconut yogurt</li>
                  </ul>
                  <span className="card-item-title">For Topping</span>
                  <ul className="checkmark">
                      <li>125g pot coconut yogurt</li>
                      <li>280g mixed summer berries , such as strawberries,
                          raspberries and blueberries</li>
                      <li>2 tbsp flaked almonds (optional)</li>
                  </ul>
              </div>

              <div id="method">
                  <span className="card-item-title">Method</span>
                  <ul>
                      <li><b>STEP 1</b><br/>
                          Activate the quinoa by soaking overnight in cold water. The next day, drain and rinse the
                          quinoa through a fine sieve (the grains are so small that they will wash through a coarse one). </li>
                      <li><b>STEP 2</b><br/>
                          Tip the quinoa into a pan and add the vanilla, creamed coconut and 600ml water. Cover the pan
                          and simmer for 20 mins. Stir in the chia with another 300ml water and cook gently for 3 mins
                          more. Stir in the pot of coconut yogurt. Spoon half the porridge into a bowl for another day.
                          Will keep for 2 days covered in the fridge. Serve the remaining porridge topped with another
                          pot of yogurt, the berries and almonds, if you like.
                      </li>
                      <li><b>STEP 3</b><br/>
                          To have the porridge another day, tip into a pan and reheat gently, with milk or water.
                          Top with fruit - for instance, orange slices and pomegranate seeds.
                      </li>
                  </ul>
              </div>
          </div>


          <div id="card-container">
              <div id="card-title">Banana Bread Recipe</div>
              <div id="recipe-image"></div>
              <div id="details">Prep time: <span className="detail-value">10 minutes</span> | Cook time: <span
                  className="detail-value">55 minutes</span> | Yield: <span className="detail-value">Makes one loaf</span>
              </div>
              <div id="card-items">
                  <span className="card-item-title">Ingredients</span>
                  <ul className="checkmark">
                      <li>2 to 3 very ripe bananas, peeled</li>
                      <li>1/3 cup melted butter</li>
                      <li>1 teaspoon baking soda</li>
                      <li>Pinch of salt</li>
                      <li>3/4 cup sugar (1/2 cup if you would like it less sweet, 1 cup if more sweet)</li>
                      <li>1 large egg, beaten</li>
                      <li>1 teaspoon vanilla extract</li>
                      <li>1 1/2 cups of all-purpose flour</li>
                  </ul>
              </div>

              <div id="method">
                  <span className="card-item-title">Method</span>
                  <ul>
                      <li>Preheat the oven to 350°F (175°C), and butter a 4x8-inch loaf pan.</li>
                      <li>In a mixing bowl, mash the ripe bananas with a fork until completely smooth. Stir the melted
                          butter into the mashed bananas.
                      </li>
                      <li>Mix in the baking soda and salt. Stir in the sugar, beaten egg, and vanilla extract. Mix in the
                          flour.
                      </li>
                      <li>Pour the batter into your prepared loaf pan. Bake for 50 minutes to 1 hour at 350°F (175°C), or
                          until a tester inserted into the center comes out clean.
                      </li>
                      <li>Remove from oven and let cool in the pan for a few minutes. Then remove the banana bread from the
                          pan and let cool completely before serving. Slice and serve. (A bread knife helps to make slices
                          that aren't crumbly.)
                      </li>
                  </ul>
              </div>
          </div>

        <div id="card-container">
            <div id="card-title">Beetroot & halloumi salad with pomegranate and dill</div>
            <div id="Beetroot"></div>
            <div id="details">Prep time: <span className="detail-value">15 minutes</span> | Cook time: <span
                className="detail-value">1-2 minutes</span> | Yield: <span className="detail-value">Serves 2</span>
            </div>
            <div id="card-items">
                <span className="card-item-title">Ingredients</span>
                <ul className="checkmark">
                    <li>1 medium red onion, halved and thinly sliced</li>
                    <li>2 tbsp apple cider vinegar</li>
                    <li>2 oranges</li>
                    <li>4 handfuls rocket leaves</li>
                    <li>2 cooked beetroots, chopped</li>
                    <li>drop rapeseed oil, for frying</li>
                    <li>80g thinly sliced halloumi, slices halved</li>
                    <li>2 tbsp pumpkin seeds</li>
                    <li>handful mint leaves</li>
                    <li>few sprigs dill, chopped</li>
                </ul>
            </div>

            <div id="method">
                <span className="card-item-title">Method</span>
                <ul>
                    <li><b>STEP 1</b><br/>
                        Put the sliced onion in a bowl, add the vinegar and toss well. Cut the peel and pith from the
                        orange then segment over the onion bowl to make sure that you catch any juice.</li>
                    <li><b>STEP 2</b><br/>
                        Pile the rocket onto plates and dot over the beetroot and orange. Rub a drop of oil around a
                        non-stick frying pan then fry the halloumi in the pan for about 30 seconds each side until golden.
                    </li>
                    <li><b>STEP 3</b><br/>
                        Stir the pomegranate into the onions and spoon this and all the dressing, over the rocket,
                        then top with the halloumi and scatter with the pumpkin seeds, mint and dill.
                    </li>
                </ul>
            </div>
        </div>


          <div id="card-container">
              <div id="card-title">Linguine with avocado, tomato & lime</div>
              <div id="Linguine"></div>
              <div id="details">Prep time: <span className="detail-value">10 minutes</span> | Cook time: <span
                  className="detail-value">20 minutes</span> | Yield: <span className="detail-value">Serves 2</span>
              </div>
              <div id="card-items">
                  <span className="card-item-title">Ingredients</span>
                  <ul className="checkmark">
                      <li>115g wholemeal linguine</li>
                      <li>1 lime, zested and juiced</li>
                      <li>1 avocado, stoned, peeled, and chopped</li>
                      <li>2 large ripe tomatoes, chopped</li>
                      <li>½ pack fresh coriander, chopped</li>
                      <li>1 red onion, finely chopped</li>
                      <li>1 red chilli, deseeded and finely chopped (optional)</li>
                  </ul>
              </div>

              <div id="method">
                  <span className="card-item-title">Method</span>
                  <ul>
                      <li><b>STEP 1</b><br/>
                          Cook the pasta according to pack instructions – about 10 mins.
                          Meanwhile, put the lime juice and zest in a medium bowl with the avocado,
                          tomatoes, coriander, onion and chilli, if using, and mix well.</li>
                      <li><b>STEP 2</b><br/>
                          Drain the pasta, toss into the bowl and mix well.
                          Serve straight away while still warm, or cold.
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      </section>
      </html>
  );
};

export default PageFour;
