import React from "react";
import Show from "../Components/Show"
import ShowPage from "../Components/ShowPage"
import {Route, Switch, withRouter} from "react-router-dom"

const ShowContainer = (props) => {
    let allShows = props.shows.map(show => {
      return <Show
        key={show.id}
        show={show}
      />
    })


    return (
      <div className ='backdrop'>
      <Switch>
        <Route
          path="/shows/:id"
          render={(routerProps) => {
            let showID = routerProps.match.params.id
            let show = props.shows.find(show => {
              return show.id == showID
            })

            return (
              <ShowPage
                show = {show}
                addComment={props.addComment}
                deleteComment={props.deleteComment}
              />
            )
          }}
          />
          <Route
            path="/shows"
            render={() => {
              return (
                <div className = "show-container ui cards">{allShows}</div>
              )}}
          />
        </Switch>
      </div>
  )
  }

export default withRouter(ShowContainer)
